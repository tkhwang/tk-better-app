import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PanelProps {
  title: string;
  children: ReactNode;
  className?: string;
  /** Right side of the header: a status word with a dot, or anything. */
  status?: ReactNode;
  /** Dark terminal ground instead of the light panel ground. */
  terminal?: boolean;
}

/** A small app window: mono header row, then content. Decorative only. */
const Panel = ({ title, children, className, status, terminal }: PanelProps) => (
  <div
    aria-hidden
    className={cn(
      "min-w-0 overflow-hidden rounded-[12px] font-mono text-[11.5px]",
      terminal ? "term bg-term-bg text-term-text" : "border border-line bg-panel text-faint",
      className,
    )}
  >
    <div
      className={cn(
        "flex items-center gap-3 border-b px-4 py-2.5 text-[11px]",
        terminal ? "border-white/10 text-term-muted" : "border-line text-faint2",
      )}
    >
      <span className="truncate">{title}</span>
      {status ? <span className="ml-auto flex shrink-0 items-center gap-2">{status}</span> : null}
    </div>
    <div className="px-4 py-3.5">{children}</div>
  </div>
);

export default Panel;

export const Dot = ({ tone, hollow }: { tone: "run" | "wait" | "idle" | "done" | "red" | "accent"; hollow?: boolean }) => (
  <i
    className={cn(
      "dot",
      tone === "run" && "bg-run text-run",
      tone === "wait" && "bg-wait text-wait",
      tone === "idle" && "bg-idle text-idle",
      tone === "done" && "bg-done text-done",
      tone === "red" && "bg-red text-red",
      tone === "accent" && "bg-accent text-accent",
      hollow && "dot-hollow",
    )}
  />
);

/** key / value row inside a Panel. */
export const Row = ({ label, children, className }: { label: ReactNode; children: ReactNode; className?: string }) => (
  <div className={cn("flex items-center gap-3.5 py-1.5", className)}>
    <span className="text-dim">{label}</span>
    <b className="ml-auto inline-flex items-center gap-2 text-right font-normal text-ink">{children}</b>
  </div>
);

/** Preformatted lines inside a terminal Panel. */
export const Lines = ({ children, className }: { children: ReactNode; className?: string }) => (
  <pre className={cn("m-0 overflow-x-auto font-mono text-[11.5px] leading-[1.8] whitespace-pre", className)}>{children}</pre>
);

export const Tag = ({ children, tone = "accent" }: { children: ReactNode; tone?: "accent" | "run" | "wait" | "done" }) => (
  <span
    className={cn(
      "inline-block rounded-full px-2 py-[2px] text-[10px] font-semibold text-white",
      tone === "accent" && "bg-accent",
      tone === "run" && "bg-run",
      tone === "wait" && "bg-wait",
      tone === "done" && "bg-done",
    )}
  >
    {children}
  </span>
);
