import Panel, { Dot, Lines, Row, Tag } from "./mock-window";

export const IntentEditorMock = () => (
  <Panel title="human · tenant-export.md" terminal status={<><Dot tone="run" /> autosaved · 500 ms</>}>
    <Lines>
      <span className="text-term-muted">---</span>{"\n"}
      <span className="text-term-muted">created: 2026-08-02T00:00:00.000Z</span>{"\n"}
      <span className="text-term-muted">updated: 2026-10-10T06:12:41.210Z</span>{"\n"}
      <span className="text-term-muted">---</span>{"\n"}
      <span className="text-accent">## Why</span>{"\n"}
      Tenants ask for a CSV once a quarter.{"\n"}
      They never want a dashboard for it.{"\n"}
      {"\n"}
      <span className="text-accent">## Taste</span>{"\n"}
      <span className="text-term-cmd">-</span> one button, no wizard{"\n"}
      <span className="text-term-cmd">-</span> plain column names, no codes
    </Lines>
  </Panel>
);

const roots = [
  { label: "wb", name: "workbranch/docs", active: true },
  { label: "ti", name: "tasteful-intent/docs", active: false },
  { label: "sk", name: "skills/docs", active: false },
] as const;

export const IntentTabsMock = () => (
  <Panel title="ai workspace" status={<><Dot tone="done" /> 3 roots pinned</>}>
    <div className="flex gap-1.5">
      {roots.map((root) => (
        <span
          key={root.label}
          className={root.active ? "rounded-md border border-accent bg-accent px-2 py-1 text-[11px] text-accent-ink" : "rounded-md border border-line2 px-2 py-1 text-[11px]"}
        >
          {root.label}
        </span>
      ))}
      <span className="rounded-md border border-dashed border-line2 px-2 py-1 text-[11px]">+</span>
    </div>
    <div className="mt-3 border-t border-line pt-2.5">
      <div className="mb-1.5 text-[10.5px] text-faint2">{roots[0].name}</div>
      {[
        ["intents/AGENT001-tenant-export.md", "2 min ago"],
        ["tasks/plan.md", "9 min ago"],
        ["tasks/todo.md", "9 min ago"],
        ["specs/export/behaviour.md", "yesterday"],
      ].map(([file, when]) => (
        <Row key={file} label={<span className="text-ink">{file}</span>}>{when}</Row>
      ))}
    </div>
    <div className="mt-2 text-[10.5px] text-faint2">closing a tab changes only app settings · files stay where they are</div>
  </Panel>
);

export const IntentModesMock = () => (
  <Panel title="tenant-export.md · split" status={<span className="seg seg-sm"><button type="button" tabIndex={-1}>edit</button><button type="button" tabIndex={-1}>view</button><button type="button" tabIndex={-1} aria-pressed="true">split</button></span>}>
    <div className="grid gap-2 sm:grid-cols-2">
      <Lines className="term rounded-lg bg-term-bg p-2.5 text-term-text">
        <span className="text-accent">## Why</span>{"\n"}
        Tenants ask for a <mark className="rounded-sm bg-wait px-0.5 text-white">CSV</mark> once a quarter.{"\n"}
        {"\n"}
        <span className="text-accent">## Taste</span>{"\n"}
        <span className="text-term-cmd">-</span> one button, no wizard
      </Lines>
      <div className="rounded-lg border border-line bg-card p-2.5 font-sans text-[12px] leading-[1.6] text-ink">
        <p className="m-0 font-semibold">Why</p>
        <p className="m-0 text-dim">Tenants ask for a <mark className="rounded-sm bg-wait px-0.5 text-white">CSV</mark> once a quarter.</p>
        <p className="m-0 mt-2 font-semibold">Taste</p>
        <p className="m-0 text-dim">· one button, no wizard</p>
      </div>
    </div>
    <div className="mt-2 text-[10.5px] text-faint2">⌘F finds in every mode · ⌘1 folders · ⌘2 content only</div>
  </Panel>
);

const rules = [
  "no llm runs inside the app",
  "notes are never copied into a database",
  "every selected root is canonicalized; file operations stay inside it",
  "hidden paths and symlinks skipped; .gitignore and .ignore respected",
  "human deletes go to the macos trash, not permanent removal",
] as const;

export const IntentLocalMock = () => (
  <Panel title="~/notes · boundary" status={<><Dot tone="run" /> local</>}>
    <div className="grid gap-1.5">
      {rules.map((rule) => (
        <div key={rule} className="flex gap-2.5 leading-[1.6]">
          <span className="text-run">✓</span>
          <span className="text-ink">{rule}</span>
        </div>
      ))}
    </div>
    <div className="mt-3 border-t border-line pt-2.5 text-[10.5px] text-faint2">
      bundle id · app.tkbetter.intentmemo<br />settings · os app-data directory
    </div>
  </Panel>
);

const themes = [
  { name: "paper", bg: "#F4EEE2", fg: "#322F29" },
  { name: "ink", bg: "#13244B", fg: "#FDF4E2" },
  { name: "slate", bg: "#1E2430", fg: "#E5E7EB" },
  { name: "linen", bg: "#FBF7F0", fg: "#5878A0" },
] as const;

export const IntentDetailsMock = () => (
  <Panel title="settings" status={<><Dot tone="done" /> en · ko</>}>
    <div className="text-[10.5px] uppercase tracking-[0.16em] text-faint2">themes</div>
    <div className="mt-1.5 grid grid-cols-4 gap-1.5">
      {themes.map((theme) => (
        <div key={theme.name} className="flex h-12 flex-col justify-between rounded-md border border-line2 p-1.5" style={{ background: theme.bg }}>
          <span className="block h-1 w-7" style={{ background: theme.fg }} />
          <span className="text-[9px]" style={{ color: theme.fg }}>{theme.name}</span>
        </div>
      ))}
    </div>
    <div className="mt-3 grid gap-3 sm:grid-cols-2">
      <div>
        <div className="text-[10.5px] uppercase tracking-[0.16em] text-faint2">human / ai palettes</div>
        <div className="mt-1.5 flex gap-1.5">
          {["#C1734B", "#5878A0", "#7A9A6D", "#A2583B"].map((color) => (
            <span key={color} className="h-4 w-4 rounded-[4px] border border-line2" style={{ background: color }} />
          ))}
        </div>
      </div>
      <div>
        <div className="text-[10.5px] uppercase tracking-[0.16em] text-faint2">typefaces · export</div>
        <div className="mt-1.5 flex flex-wrap gap-1.5"><Tag>sans</Tag><Tag>serif</Tag><Tag tone="done">pdf</Tag><Tag tone="done">img ≤ 10 MiB</Tag></div>
      </div>
    </div>
  </Panel>
);
