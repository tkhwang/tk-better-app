import Panel, { Dot, Lines, Row, Tag } from "./mock-window";

export const WorkbranchTreeMock = () => (
  <Panel title="workbranch add login" terminal status={<><Dot tone="run" /> created</>}>
    <Lines>
      <span className="text-term-text">my-app-workspace/</span>{"\n"}
      <span className="text-term-muted">├─ .workbranch.config</span>{"\n"}
      <span className="text-accent">├─ _base/</span>{"\n"}
      <span className="text-term-muted">│  ├─ frontend          main</span>{"\n"}
      <span className="text-term-muted">│  └─ backend           main</span>{"\n"}
      <span className="text-term-cmd">└─ feat-login/</span><span className="text-term-muted">          task root · run your agent here</span>{"\n"}
      <span className="text-term-muted">   ├─ frontend          feat/login</span>{"\n"}
      <span className="text-term-muted">   └─ backend           feat/login</span>
    </Lines>
  </Panel>
);

export const WorkbranchRefreshMock = () => (
  <Panel title="feat-login · refresh" terminal status={<><Dot tone="run" /> up to date</>}>
    <Lines>
      <span className="text-accent">❯</span> <span className="text-term-cmd">workbranch</span> refresh feat-login{"\n"}
      <span className="text-term-muted">pull     _base/frontend        main        ↓3  fast-forward</span>{"\n"}
      <span className="text-term-muted">pull     _base/backend         main        ↓1  fast-forward</span>{"\n"}
      <span className="text-term-muted">update   feat-login/frontend   feat/login  ← main</span>{"\n"}
      <span className="text-term-muted">update   feat-login/backend    feat/login  ← main</span>{"\n"}
      <span className="text-run">✓</span> feat-login is on the latest base{"\n"}
      {"\n"}
      <span className="text-accent">❯</span> <span className="text-term-cmd">workbranch</span> stash               <span className="text-term-muted"># dirty? keep it per branch</span>{"\n"}
      <span className="text-accent">❯</span> <span className="text-term-cmd">workbranch</span> finalize feat-login <span className="text-term-muted"># pull → update → land</span>
    </Lines>
  </Panel>
);

const flows = [
  {
    name: "feature flow",
    base: "main / master",
    task: "feat/login",
    folder: "feat-login/",
    commands: ["workbranch push feat-login"],
    pushes: "task branch → PR",
  },
  {
    name: "stacked flow",
    base: "feat/login",
    task: "feat/login-part1",
    folder: "feat-login-part1/",
    commands: ["workbranch land feat-login-part1", "workbranch push"],
    pushes: "base branch",
  },
] as const;

export const WorkbranchShipMock = () => (
  <div aria-hidden className="grid gap-3 sm:grid-cols-2">
    {flows.map((flow) => (
      <Panel key={flow.name} title={flow.name}>
        <Row label="base">{flow.base}</Row>
        <Row label="task">{flow.task}</Row>
        <Row label="folder">{flow.folder}</Row>
        <div className="mt-2 border-t border-line pt-2.5">
          {flow.commands.map((cmd) => (
            <div key={cmd} className="py-0.5 text-ink [overflow-wrap:anywhere]">
              <span className="text-accent">$</span> {cmd}
            </div>
          ))}
        </div>
        <div className="mt-2 text-[11px] text-faint2">pushes · {flow.pushes}</div>
      </Panel>
    ))}
  </div>
);

const columns = [
  { ko: "내 응답 대기", en: "waiting on you", tone: "wait" as const, task: "feat-login", project: "my-app", state: "권한 승인 대기", provider: "claude", repos: [["frontend", "●2"], ["backend", "↑1"]] },
  { ko: "실행 중", en: "running", tone: "run" as const, task: "fix-api", project: "my-app", state: "tests running", provider: "codex", repos: [["backend", "●5"]] },
  { ko: "턴 종료 · 검토", en: "turn ended", tone: "done" as const, task: "feat-usage", project: "web", state: "review", provider: "claude", repos: [["frontend", "CLEAN"]] },
] as const;

export const WorkbranchBoardMock = () => (
  <Panel title="workbranch companion · main" status={<><Dot tone="run" /> 2 projects · 5 tasks</>}>
    <div className="mb-3 flex justify-between border-b border-line pb-2 text-[10.5px] text-faint2">
      <span>CL 5h 42% · W 63%</span>
      <span>CO W 18% · 31.0M</span>
    </div>
    <div className="grid gap-2 sm:grid-cols-3">
      {columns.map((column) => (
        <div key={column.ko} className="rounded-lg border border-line bg-card p-2.5">
          <div className="flex items-center gap-2 text-ink">
            <Dot tone={column.tone} />
            <span className="text-[11px] font-semibold">{column.ko}</span>
          </div>
          <div className="mt-0.5 pl-4 text-[10px] uppercase tracking-[0.12em] text-faint2">{column.en}</div>
          <div className="mt-2.5 rounded-md border border-line bg-panel p-2.5">
            <div className="text-[10px] text-faint2">{column.project}</div>
            <div className="text-[12px] font-semibold text-ink">{column.task}</div>
            <div className="mt-1.5"><Tag tone={column.tone === "done" ? "done" : column.tone}>{column.state}</Tag></div>
            <div className="mt-2 grid gap-0.5 text-[10.5px]">
              {column.repos.map(([repo, fact]) => (
                <div key={repo} className="flex justify-between"><span>{repo}</span><span className="text-ink">{fact}</span></div>
              ))}
            </div>
            <div className="mt-2 text-[10px] text-faint2">{column.provider}</div>
          </div>
        </div>
      ))}
    </div>
    <div className="mt-3 text-[10px] uppercase tracking-[0.16em] text-faint2">workspaces · 2 without a session</div>
  </Panel>
);

const limits = [
  { label: "claude · 5h", value: 42, reset: "resets in 2h 18m" },
  { label: "claude · weekly", value: 63, reset: "resets in 3d 4h" },
  { label: "codex · weekly", value: 18, reset: "resets in 5d 9h" },
] as const;

export const WorkbranchUsageMock = () => (
  <Panel title="workbranch companion · usage" status={<><Dot tone="run" /> local files only</>}>
    <div className="mb-3 inline-block rounded-md border border-line bg-card px-2.5 py-1 text-[11px] text-ink">
      CL 5h 42% · W 63%&nbsp;&nbsp;CO W 18% · 31.0M
    </div>
    <div className="grid gap-3">
      {limits.map((limit) => (
        <div key={limit.label}>
          <div className="mb-1 flex justify-between text-[11px]">
            <span className="text-ink">{limit.label}</span>
            <span>{limit.value}% · {limit.reset}</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-line2">
            <div className="h-full rounded-full bg-accent" style={{ width: `${limit.value}%` }} />
          </div>
        </div>
      ))}
    </div>
    <div className="mt-4 grid grid-cols-7 items-end gap-1">
      {[18, 26, 12, 31, 22, 9, 31].map((height, index) => (
        <div key={index} className="rounded-[3px] bg-line2 last:bg-accent" style={{ height: `${height * 1.6}px` }} />
      ))}
    </div>
    <div className="mt-1.5 flex justify-between text-[10px] text-faint2">
      <span>last 7 days</span>
      <span>today · 31.0M tokens</span>
    </div>
  </Panel>
);

const agents = [
  { name: "claude code", cmd: "workbranch hooks install --provider claude", tone: "run" as const },
  { name: "codex", cmd: "workbranch hooks install --provider codex", tone: "run" as const },
  { name: "grok build", cmd: "workbranch hooks describe --provider grok", tone: "wait" as const, trust: "workbranch hooks install --provider grok --trust" },
] as const;

export const WorkbranchAgentsMock = () => (
  <Panel title="workbranch hooks" status={<><Dot tone="run" /> 3 providers</>}>
    <div className="grid gap-2">
      {agents.map((agent) => (
        <div key={agent.name} className="rounded-lg border border-line bg-card p-2.5">
          <div className="flex items-center gap-2 text-[11px] font-semibold text-ink">
            <Dot tone={agent.tone} hollow={agent.tone === "wait"} />
            {agent.name}
            {"trust" in agent ? <span className="ml-auto text-[10px] font-normal uppercase tracking-[0.12em] text-wait">explicit trust</span> : null}
          </div>
          <div className="mt-1.5 text-ink [overflow-wrap:anywhere]"><span className="text-accent">$</span> {agent.cmd}</div>
          {"trust" in agent ? <div className="mt-0.5 [overflow-wrap:anywhere]"><span className="text-accent">$</span> {agent.trust}</div> : null}
        </div>
      ))}
    </div>
  </Panel>
);
