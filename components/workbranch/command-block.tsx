"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

interface CommandBlockProps {
  command: string;
  className?: string;
}

const CommandBlock = ({ command, className }: CommandBlockProps) => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        setCopied(false);
        timeoutRef.current = null;
      }, 2000);
    } catch {
      // Clipboard API unavailable (e.g. non-secure context) — fail silently.
    }
  };

  return (
    <div
      className={cn(
        "group flex items-start gap-3 rounded-xl border border-border/60 bg-muted/40 px-4 py-3 font-mono text-sm backdrop-blur-sm",
        className
      )}
    >
      <span className="mt-0.5 select-none text-muted-foreground">$</span>
      <code className="min-w-0 flex-1 whitespace-pre-wrap break-words text-foreground [overflow-wrap:anywhere]">
        {command}
      </code>
      <button
        type="button"
        onClick={handleCopy}
        aria-label={copied ? t("workbranch.install.copied") : t("workbranch.install.copy")}
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-background hover:text-primary"
      >
        {copied ? (
          <Check className="h-4 w-4 text-emerald-500" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </button>
    </div>
  );
};

export default CommandBlock;
