export type ProductSlug = "workbranch" | "tasteful-intent" | "skills";

export type LocalizedAsset = {
  en: string;
  ko: string;
};

export interface HeroFigure extends LocalizedAsset {
  width: number;
  height: number;
  /** Optional narrow variant shown below the `md` breakpoint. */
  mobile?: LocalizedAsset & { width: number; height: number };
}

export type InstallOption =
  | { id: string; kind: "command"; command: string }
  | { id: string; kind: "link"; href: string };

/** One number in the strip under the hero. Labels live in the locale files. */
export type FactSpec =
  | { kind: "stars" }
  | { kind: "release"; tagPrefix?: string }
  | { kind: "static"; value: string };

export interface ProductConfig {
  slug: ProductSlug;
  /** Route of the product page inside this site. */
  path: `/product/${ProductSlug}`;
  /** owner/name on GitHub. */
  repo: string;
  repoUrl: string;
  releasesUrl: string;
  /** One-liner shown inside the hero. */
  heroCommand: string;
  heroFigure: HeroFigure;
  facts: readonly FactSpec[];
  install: InstallOption[];
}

const GITHUB = "https://github.com/tkhwang";

export const PRODUCTS: Record<ProductSlug, ProductConfig> = {
  workbranch: {
    slug: "workbranch",
    path: "/product/workbranch",
    repo: "tkhwang/workbranch",
    repoUrl: `${GITHUB}/workbranch`,
    releasesUrl: `${GITHUB}/workbranch/releases`,
    heroCommand: "brew install tkhwang/tap/workbranch",
    heroFigure: {
      en: "/products/workbranch/hero-en.svg",
      ko: "/products/workbranch/hero-ko.svg",
      width: 1200,
      height: 400,
    },
    facts: [
      { kind: "stars" },
      { kind: "release", tagPrefix: "v" },
      { kind: "release", tagPrefix: "workbranch-companion-" },
      { kind: "static", value: "3" },
    ],
    install: [
      {
        id: "cli",
        kind: "command",
        command: "brew install tkhwang/tap/workbranch",
      },
      {
        id: "companion",
        kind: "command",
        command: "brew install --cask tkhwang/tap/workbranch-companion",
      },
      {
        id: "script",
        kind: "command",
        command:
          "curl -fsSL https://raw.githubusercontent.com/tkhwang/workbranch/main/install.sh | bash",
      },
    ],
  },
  "tasteful-intent": {
    slug: "tasteful-intent",
    path: "/product/tasteful-intent",
    repo: "tkhwang/tasteful-intent",
    repoUrl: `${GITHUB}/tasteful-intent`,
    releasesUrl: `${GITHUB}/tasteful-intent/releases`,
    heroCommand: "brew install --cask tkhwang/tap/tasteful-intent",
    heroFigure: {
      en: "/products/tasteful-intent/hero-en.svg",
      ko: "/products/tasteful-intent/hero-ko.svg",
      width: 1200,
      height: 352,
      mobile: {
        en: "/products/tasteful-intent/hero-en-mobile.svg",
        ko: "/products/tasteful-intent/hero-ko-mobile.svg",
        width: 720,
        height: 480,
      },
    },
    facts: [
      { kind: "stars" },
      { kind: "release", tagPrefix: "v" },
      { kind: "static", value: "2" },
      { kind: "static", value: "0" },
    ],
    install: [
      {
        id: "cask",
        kind: "command",
        command: "brew install --cask tkhwang/tap/tasteful-intent",
      },
      {
        id: "dmg",
        kind: "link",
        href: `${GITHUB}/tasteful-intent/releases`,
      },
    ],
  },
  skills: {
    slug: "skills",
    path: "/product/skills",
    repo: "tkhwang/skills",
    repoUrl: `${GITHUB}/skills`,
    releasesUrl: `${GITHUB}/skills`,
    heroCommand: "npx skills add tkhwang/skills -g",
    heroFigure: {
      en: "/products/skills/hero-en.svg",
      ko: "/products/skills/hero-ko.svg",
      width: 1200,
      height: 650,
    },
    facts: [
      { kind: "stars" },
      { kind: "static", value: "10" },
      { kind: "static", value: "5" },
      { kind: "static", value: "3" },
    ],
    install: [
      {
        id: "all",
        kind: "command",
        command: "npx skills add tkhwang/skills -g",
      },
      {
        id: "workflow",
        kind: "command",
        command:
          "npx skills add tkhwang/skills -s tk-setup,tk-workflow,tk-intent,tk-grill,tk-plan,tk-implement,tk-verify,tk-signoff,tk-multi-review,tk-multi-debate -g",
      },
      {
        id: "update",
        kind: "command",
        command: "npx skills update",
      },
    ],
  },
};

/** Display order on the home page. */
export const PRODUCT_ORDER: ProductSlug[] = [
  "workbranch",
  "tasteful-intent",
  "skills",
];
