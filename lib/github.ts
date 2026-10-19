import type { FactSpec } from "@/const/products";

export interface RepoStats {
  stars: number | null;
  /** Release tag names, newest first. */
  tags: string[];
}

/** Longest a page build waits on GitHub before falling back to "—". */
const TIMEOUT_MS = 5000;

const headers = {
  Accept: "application/vnd.github+json",
  "User-Agent": "tkbetter.app",
};

/**
 * Public GitHub numbers for a repo. Revalidated hourly; every failure
 * degrades to nulls so the page still renders.
 */
export async function getRepoStats(repo: string): Promise<RepoStats> {
  const [repoRes, releasesRes] = await Promise.allSettled([
    fetch(`https://api.github.com/repos/${repo}`, {
      headers,
      signal: AbortSignal.timeout(TIMEOUT_MS),
      next: { revalidate: 3600 },
    }),
    fetch(`https://api.github.com/repos/${repo}/releases?per_page=20`, {
      headers,
      signal: AbortSignal.timeout(TIMEOUT_MS),
      next: { revalidate: 3600 },
    }),
  ]);

  let stars: number | null = null;
  if (repoRes.status === "fulfilled" && repoRes.value.ok) {
    const json: unknown = await repoRes.value.json().catch(() => null);
    if (json && typeof json === "object" && "stargazers_count" in json) {
      const count = (json as { stargazers_count: unknown }).stargazers_count;
      if (typeof count === "number") stars = count;
    }
  }

  let tags: string[] = [];
  if (releasesRes.status === "fulfilled" && releasesRes.value.ok) {
    const json: unknown = await releasesRes.value.json().catch(() => null);
    if (Array.isArray(json)) {
      tags = json
        .map((release: unknown) =>
          release && typeof release === "object" && "tag_name" in release
            ? (release as { tag_name: unknown }).tag_name
            : null,
        )
        .filter((tag): tag is string => typeof tag === "string");
    }
  }

  return { stars, tags };
}

const formatCount = (value: number) =>
  new Intl.NumberFormat("en-US").format(value);

/** Turns fact specs into display strings. Unknown values render as "—". */
export function resolveFacts(specs: readonly FactSpec[], stats: RepoStats): string[] {
  return specs.map((spec) => {
    switch (spec.kind) {
      case "stars":
        return stats.stars === null ? "—" : formatCount(stats.stars);
      case "release": {
        const prefix = spec.tagPrefix ?? "";
        const tag = stats.tags.find((name) => name.startsWith(prefix));
        if (!tag) return "—";
        const rest = tag.slice(prefix.length);
        return rest.startsWith("v") ? rest : `v${rest}`;
      }
      case "static":
        return spec.value;
    }
  });
}
