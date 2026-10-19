"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

interface CommandBlockProps {
  command: string;
  /** "card": white chip for the page ground. "step": tinted chip for use inside a white card. */
  surface?: "card" | "step";
  className?: string;
}

/** `$ command` chip with a copy button. */
const CommandBlock = ({ command, surface = "card", className }: CommandBlockProps) => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setCopied(false);
        timeoutRef.current = null;
      }, 2000);
    } catch {
      // Clipboard API unavailable (e.g. non-secure context): fail silently.
    }
  };

  return (
    <div
      className={cn(
        "inline-flex min-h-12 max-w-full items-stretch overflow-hidden rounded-[10px] text-left",
        surface === "step" ? "bg-step" : "bg-card shadow-[var(--shadow-ring)]",
        className,
      )}
    >
      <code className="flex min-w-0 flex-1 items-center px-3.5 py-2.5 font-mono text-[13px] leading-[1.5] text-ink [overflow-wrap:anywhere]">
        <span className="mr-2.5 select-none text-faint">$</span>
        <span className="min-w-0">{command}</span>
      </code>
      <button
        type="button"
        onClick={handleCopy}
        aria-live="polite"
        className="min-w-[68px] shrink-0 cursor-pointer border-l border-line2 px-3.5 font-mono text-[12px] text-dim transition-colors hover:bg-black/[0.03] hover:text-ink"
      >
        {copied ? t("product.common.copied") : t("product.common.copy")}
      </button>
    </div>
  );
};

export default CommandBlock;
