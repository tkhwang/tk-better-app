import Panel, { Dot, Lines, Row } from "./mock-window";

export const SkillsDocsMock = () => (
  <Panel title="docs/ · files are the state" terminal status={<><Dot tone="run" /> any session resumes</>}>
    <Lines>
      <span className="text-term-text">docs/</span>{"\n"}
      <span className="text-accent">├─ intents/AGENT001-tenant-export.md</span>   <span className="text-term-muted">permanent</span>{"\n"}
      <span className="text-term-muted">├─ tasks/plan.md                         current work</span>{"\n"}
      <span className="text-term-muted">├─ tasks/todo.md                         current work</span>{"\n"}
      <span className="text-term-muted">├─ tasks/reviews/  ·  debates/           current work</span>{"\n"}
      <span className="text-accent">├─ specs/export/</span>                        <span className="text-term-muted">permanent</span>{"\n"}
      <span className="text-term-cmd">└─ agents/tk-workflow.md</span>                <span className="text-term-muted">per repo</span>
    </Lines>
  </Panel>
);

const stages = [
  { n: "[0]", name: "tk-intent", out: "R1 … Rn" },
  { n: "[1]", name: "tk-plan", out: "slices · coverage" },
  { n: "[2]", name: "tk-implement", out: "backend → frontend" },
  { n: "[3]", name: "tk-verify", out: "tsc · lint · tests" },
  { n: "[4]", name: "tk-signoff", out: "go / no-go" },
] as const;

export const SkillsGateMock = () => (
  <Panel title="/tk-workflow" status={<><Dot tone="wait" /> waiting on you</>}>
    <ol className="m-0 flex list-none flex-wrap items-stretch gap-1.5 p-0">
      {stages.map((stage, index) => (
        <li key={stage.name} className="flex items-center gap-1.5">
          <div className="rounded-lg border border-line bg-card px-2.5 py-1.5">
            <div className="text-[10px] text-faint2">{stage.n}</div>
            <div className="text-[12px] font-semibold text-ink">{stage.name}</div>
            <div className="text-[10.5px]">{stage.out}</div>
          </div>
          {index < stages.length - 1 ? <span className="text-accent">→</span> : null}
        </li>
      ))}
    </ol>
    <Lines className="mt-3 border-t border-line pt-2.5 whitespace-pre-wrap">
      <span className="text-faint2">agent ›</span> plan.md saved · 3 slices · 0 open decisions. Turn ended.{"\n"}
      <span className="text-faint2">you   ›</span> <span className="text-wait">looks fine</span>{"\n"}
      <span className="text-faint2">agent ›</span> That is not an approval. Reply <span className="text-accent">next</span> or <span className="text-accent">revise: …</span>
    </Lines>
  </Panel>
);

const peers = [
  { name: "claude", cmd: "claude -p" },
  { name: "codex", cmd: "codex exec -s read-only" },
  { name: "grok", cmd: "grok -p" },
] as const;

export const SkillsPeersMock = () => (
  <Panel title="review · docs/tasks/reviews/" status={<><Dot tone="run" /> 3 peers · read-only</>}>
    <div className="grid gap-1.5 sm:grid-cols-3">
      {peers.map((peer) => (
        <div key={peer.name} className="rounded-lg border border-line bg-card p-2.5">
          <div className="text-[12px] font-semibold text-ink">{peer.name}</div>
          <div className="mt-1"><span className="text-accent">$</span> {peer.cmd}</div>
          <div className="mt-1 text-[10.5px] text-faint2">→ reviews/{peer.name}.md</div>
        </div>
      ))}
    </div>
    <div className="mt-3 border-t border-line pt-2.5">
      <Row label="triage">2 patched · 1 asked via tk-grill · 1 deferred</Row>
      <Row label="edits">the orchestrator only</Row>
    </div>
  </Panel>
);

export const SkillsSignoffMock = () => (
  <Panel title="/tk-signoff" terminal status={<><Dot tone="done" /> go</>}>
    <Lines>
      <span className="text-accent">›</span> /tk-signoff{"\n"}
      <span className="text-term-muted">R1 … R6 traced through plan · diff · verification</span>{"\n"}
      <span className="text-run">Go</span>{"\n"}
      <span className="text-term-muted">+ intent Outcome appended</span>{"\n"}
      <span className="text-term-muted">+ docs/specs/export/ updated</span>{"\n"}
      <span className="text-term-muted">− docs/tasks/ emptied</span>{"\n"}
      {"\n"}
      <span className="text-accent">$</span> <span className="text-term-cmd">git</span> commit -m <span className="text-term-str">&quot;feat(export): tenant CSV export&quot;</span>{"\n"}
      <span className="text-term-muted">  yours — the agent reads git, it never writes it</span>
    </Lines>
  </Panel>
);
