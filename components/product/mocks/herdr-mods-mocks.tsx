import Panel, { Dot, Lines, Tag } from "./mock-window";

export const HerdrSyncMock = () => (
  <Panel title="~/tkhwang-herdr-mods" terminal status={<><Dot tone="run" /> staged · checked · swapped</>}>
    <Lines>
      <span className="text-accent">$</span> <span className="text-term-cmd">./sync.sh</span> apply{"\n"}
      <span className="text-run">installed</span> mods/agents-dev{"\n"}
      <span className="text-run">installed</span> mods/better-spaces{"\n"}
      <span className="text-run">installed</span> mods/tabs-dev{"\n"}
      <span className="text-term-muted">same: mods/git-graph</span>{"\n"}
      <span className="text-term-muted">same: themes/herdr-catppuccin.json</span>{"\n"}
      <span className="text-term-muted">  backed up layouts/main-dev.json -&gt; ~/.config/herdr-app.bak-20261105-091412-4821/</span>{"\n"}
      <span className="text-run">installed</span> layouts/main-dev.json{"\n"}
      <span className="text-term-text">restart Herdr if a mod folder was new, then switch to the main-dev layout (⌘⇧L)</span>{"\n"}
      {"\n"}
      <span className="text-accent">$</span> <span className="text-term-cmd">./sync.sh</span> backup   <span className="text-term-muted"># after changing a mod or the layout in the app</span>
    </Lines>
  </Panel>
);

/* Glow tints follow the mods: green done, orange blocked, a neutral contour while working, cyan current. */
const glow = {
  current: { background: "rgb(34 211 238 / 0.14)", boxShadow: "inset 3px 0 0 #22d3ee" },
  done: { background: "rgb(34 197 94 / 0.10)", boxShadow: "inset 0 0 0 1.5px #22c55e" },
  blocked: { background: "rgb(245 158 11 / 0.10)", boxShadow: "inset 0 0 0 1.5px #f59e0b" },
  working: { boxShadow: "inset 0 0 0 1.5px rgb(20 20 20 / 0.35)" },
} as const;

const spaces = [
  { letter: "H", color: "#8b7cf6", name: "herdr-mods", branch: "main", pr: "#12 open", ports: "fe:3011 · be:5010", tone: "current" as const },
  { letter: "A", color: "#22a99a", name: "api", branch: "fix/login", pr: "#8 merged", ports: null, tone: "done" as const },
  { letter: "W", color: "#e3814f", name: "web", branch: "main", pr: null, ports: null, tone: "blocked" as const },
] as const;

const agentRows = [
  { name: "claude", since: "2m", tone: "working" as const },
  { name: "codex", since: "12m", tone: "done" as const },
] as const;

export const HerdrSpacesMock = () => (
  <Panel title="better-spaces · agents-dev" status={<><Dot tone="done" /> 1 done · <Dot tone="wait" /> 1 blocked</>}>
    <div className="grid gap-3 sm:grid-cols-2">
      <div>
        <div className="mb-1.5 text-[10px] uppercase tracking-[0.16em] text-faint2">spaces</div>
        <div className="grid gap-1.5">
          {spaces.map((space) => (
            <div key={space.name} className="rounded-lg px-2.5 py-2" style={glow[space.tone]}>
              <div className="flex items-center gap-2">
                <span
                  className="flex size-4 items-center justify-center rounded-[4px] text-[9px] font-bold text-white"
                  style={{ background: space.color }}
                >
                  {space.letter}
                </span>
                <span className={space.tone === "current" ? "font-semibold text-ink" : "text-ink"}>{space.name}</span>
                <span className="ml-auto">{space.branch}</span>
              </div>
              {space.ports || space.pr ? (
                <div className="mt-1 flex gap-3 pl-6 text-[10.5px] text-faint2">
                  {space.ports ? <span>{space.ports}</span> : null}
                  {space.pr ? <span>PR {space.pr}</span> : null}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="mb-1.5 text-[10px] uppercase tracking-[0.16em] text-faint2">agents · grouped by space</div>
        <div className="flex items-center gap-2 border-b border-line pb-1.5">
          <span className="flex size-4 items-center justify-center rounded-[4px] bg-[#8b7cf6] text-[9px] font-bold text-white">H</span>
          <span className="font-semibold text-ink">herdr-mods</span>
          <span className="ml-auto">main</span>
        </div>
        <div className="mt-1.5 grid gap-1.5 pl-[22px]">
          {agentRows.map((agent) => (
            <div key={agent.name} className="flex items-center rounded-md px-2.5 py-1.5" style={glow[agent.tone]}>
              <span className="text-ink">{agent.name}</span>
              <span className="ml-auto">{agent.since}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 border-t border-line pt-2 text-[10.5px] text-faint2">
          green · done &nbsp; orange · blocked &nbsp; contour · working &nbsp; cyan · current
        </div>
      </div>
    </div>
  </Panel>
);

export const HerdrTabsMock = () => (
  <Panel title="tabs-dev" status={<><Dot tone="wait" /> 1 agent tab</>}>
    <div className="flex flex-wrap items-center gap-1.5">
      <span className="inline-flex min-w-[96px] items-center gap-2 rounded-md border border-[#eab308]/70 bg-[#facc15]/15 px-2.5 py-1 text-[11px] text-[#a16207]">
        claude <i className="ml-auto size-1.5 rounded-full bg-[#eab308]" /> ×
      </span>
      <span className="inline-flex min-w-[96px] items-center gap-2 rounded-md border border-line2 px-2.5 py-1 text-[11px] text-dim">
        zsh <span className="ml-auto">×</span>
      </span>
      <span className="px-1.5 text-[13px] text-dim">+</span>
      <span className="inline-flex overflow-hidden rounded-md border border-line2 text-[10px]">
        <span className="bg-accent/15 px-1.5 py-1 text-accent">▮▮▮</span>
        <span className="border-l border-line2 px-1.5 py-1 text-faint2">▮▮</span>
      </span>
      <span className="ml-auto flex items-center gap-3 text-[11px]">
        <span>Files</span>
        <span>Changes</span>
        <span className="rounded-md bg-accent/15 px-1.5 py-0.5 text-accent">Git</span>
        <span className="text-faint2">Markdown</span>
      </span>
    </div>
    <div className="mt-3 grid gap-1.5 border-t border-line pt-2.5 sm:grid-cols-3">
      <div className="rounded-lg border border-line bg-card p-2.5">
        <div className="text-[10px] uppercase tracking-[0.12em] text-faint2">tab kind</div>
        <div className="mt-1 text-ink">agent tabs yellow · others outlined · ≥ 180px</div>
      </div>
      <div className="rounded-lg border border-line bg-card p-2.5">
        <div className="text-[10px] uppercase tracking-[0.12em] text-faint2">3 | 2 columns</div>
        <div className="mt-1 text-ink">2 zooms the agent pane · shell column folds · file panel stays</div>
      </div>
      <div className="rounded-lg border border-line bg-card p-2.5">
        <div className="text-[10px] uppercase tracking-[0.12em] text-faint2">+ menu</div>
        <div className="mt-1 text-ink">Open with Zed · zed → zeditor → open -a Zed</div>
      </div>
    </div>
  </Panel>
);

const staged = ["mods/tabs-dev/main.js", "layouts/main-dev.json"] as const;

export const HerdrChangesMock = () => (
  <Panel title="better-changes · herdr-mods" status={<><Dot tone="run" /> staged 2 · unstaged 1</>}>
    <div className="grid gap-3 sm:grid-cols-[1fr_1.3fr]">
      <div>
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.12em] text-faint2">
          <span>staged</span>
          <span>2</span>
        </div>
        {staged.map((file) => (
          <div key={file} className="flex items-center gap-2 py-1 text-ink [overflow-wrap:anywhere]">
            <span className="text-run">M</span>
            {file}
          </div>
        ))}
        <div className="mt-2 flex items-center justify-between border-t border-line pt-2 text-[10px] uppercase tracking-[0.12em] text-faint2">
          <span>unstaged</span>
          <span>1</span>
        </div>
        <div className="flex items-center gap-2 py-1 text-ink">
          <span className="text-wait">M</span>
          README.md
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="rounded-lg border border-line bg-card p-2.5 leading-[1.6] text-ink">
          feat(tabs): tint agent tabs yellow and keep every tab at least 180px wide
          <div className="mt-1 text-[10px] text-faint2">← Message · claude -p · from the staged diff and the last 8 commits</div>
        </div>
        <div className="grid grid-cols-4 gap-1.5 text-[11px]">
          <span className="flex items-center justify-center gap-1 rounded-md border border-line2 py-1.5 text-ink">✦ Message</span>
          <span className="col-span-2 flex items-center justify-center rounded-md bg-ink py-1.5 font-semibold text-card">Commit</span>
          <span className="flex items-center justify-center rounded-md border border-line2 py-1.5 text-ink">Push ↑2</span>
        </div>
        <div className="text-[10.5px] text-faint2">never forces · off on a detached HEAD or without a remote · a rejected push shows git&apos;s reason</div>
      </div>
    </div>
  </Panel>
);

const commits = [
  { lane: "none" as const, label: null, text: "uncommitted · 3 files", dim: true },
  { lane: "blue" as const, label: "feat/import-works", text: "tint agent tabs yellow" },
  { lane: "blue" as const, label: null, text: "keep every tab at least 180px wide" },
  { lane: "purple" as const, label: null, text: "git-graph: six review fixes" },
  { lane: "blue" as const, label: null, text: "add a Push button beside Commit" },
  { lane: "green" as const, label: "main", text: "first commit" },
] as const;

const laneColor = { none: "#7f849c", blue: "#2f54eb", purple: "#7c3aed", green: "#15803d" } as const;

export const HerdrGraphMock = () => (
  <Panel title="git-graph · side panel" status={<><Dot tone="done" /> main ↑2</>}>
    <div className="grid gap-3 sm:grid-cols-[1.4fr_1fr]">
      <ol className="m-0 list-none p-0">
        {commits.map((commit, index) => (
          <li key={commit.text} className="grid grid-cols-[18px_1fr] items-center gap-2.5 py-1">
            <span className="relative flex h-5 items-center justify-center">
              <span
                aria-hidden
                className="absolute left-1/2 w-px -translate-x-1/2 bg-line2"
                style={{ top: index === 0 ? "50%" : 0, bottom: index === commits.length - 1 ? "50%" : 0 }}
              />
              <span
                className="relative size-2.5 rounded-full"
                style={
                  commit.lane === "none"
                    ? { background: "var(--panel)", boxShadow: `inset 0 0 0 2px ${laneColor.none}` }
                    : { background: laneColor[commit.lane] }
                }
              />
            </span>
            <span className="flex min-w-0 items-center gap-2">
              {commit.label ? (
                <Tag tone={commit.label === "main" ? "run" : "accent"}>{commit.label}</Tag>
              ) : null}
              <span className={"dim" in commit && commit.dim ? "truncate text-faint2" : "truncate text-ink"}>{commit.text}</span>
            </span>
          </li>
        ))}
      </ol>
      <div className="flex flex-col gap-2">
        <div className="rounded-lg border border-line bg-card p-2.5">
          <div className="text-[10px] uppercase tracking-[0.12em] text-faint2">right-click</div>
          <div className="mt-1 leading-[1.7] text-ink">checkout · merge · rebase · cherry pick · revert · reset · tag · push · stash</div>
          <div className="mt-1 text-[10.5px] text-faint2">each asks first in a dialog</div>
        </div>
        <div className="rounded-lg border border-line bg-card p-2.5">
          <div className="text-[10px] uppercase tracking-[0.12em] text-faint2">manygit · a folder of repos</div>
          <div className="mt-1 grid gap-0.5">
            <div className="flex justify-between"><span className="text-ink">backend</span><span>main · ●2 ↑1</span></div>
            <div className="flex justify-between"><span className="text-ink">frontend</span><span>feat/login · CLEAN</span></div>
          </div>
        </div>
      </div>
    </div>
  </Panel>
);

const licenses = [
  ["LICENSE-herdr", "Apache-2.0", "Herdr's own mods"],
  ["LICENSE-herdr-mods", "Apache-2.0", "munza/herdr-mods"],
  ["LICENSE-herdr-spaces-status", "Apache-2.0", "filipores/herdr-spaces-status"],
  ["LICENSE-herdr-open-with-zed", "Apache-2.0", "atleugim/herdr-open-with-zed"],
  ["LICENSE-herdr-git-graph", "MIT", "rabeeh-ta/herdr-git-graph"],
  ["LICENSE-herdr-markdown-browser", "MIT", "ohneda/herdr-markdown-browser"],
] as const;

export const HerdrPatchesMock = () => (
  <Panel title="patches · licenses" terminal status={<><Dot tone="run" /> 18 markers · 6 licenses</>}>
    <Lines>
      <span className="text-accent">$</span> <span className="text-term-cmd">grep</span> -rln <span className="text-term-str">&quot;status glow&quot;</span> mods{"\n"}
      <span className="text-term-muted">mods/agents-dev/main.js</span>{"\n"}
      <span className="text-term-muted">mods/better-spaces/main.js</span>{"\n"}
      {"\n"}
      <span className="text-accent">$</span> <span className="text-term-cmd">ls</span> LICENSE-*{"\n"}
      {licenses.map(([file, license, from]) => (
        <span key={file}>
          <span className="text-term-text">{file.padEnd(31)}</span>
          <span className="text-run">{license.padEnd(12)}</span>
          <span className="text-term-muted">{from}</span>
          {"\n"}
        </span>
      ))}
      <span className="text-term-muted">copy-on-select · Catppuccin themes   no license → fetched by apply at pinned commits</span>
    </Lines>
  </Panel>
);
