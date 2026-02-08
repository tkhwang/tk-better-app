"use client";

import { Separator } from "@/components/ui/separator";
import { GithubIcon } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Footer04Page = () => {
  const { t } = useTranslation();

  return (
    <footer className="mt-16 bg-muted/30 border-t border-border">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Link
              href="/"
              className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity"
            >
              tkBetter<span className="text-primary">.app</span>
            </Link>
            <p className="mt-2 text-muted-foreground text-sm text-center md:text-left max-w-xs">
              {t("hero.subtitle")}
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="https://github.com/tkhwang"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <GithubIcon className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.threads.com/@tkbetter.app"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
              title="Threads"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M16.556 12.746a3.74 3.74 0 0 0-.215-.1 8.025 8.025 0 0 0-.327-1.774C15.395 8.56 13.74 6.94 11.133 6.92h-.042c-1.564 0-2.867.667-3.666 1.873l1.32.907c.596-.9 1.533-1.063 2.346-1.063h.028c.908.005 1.594.27 2.037.783.323.374.539.891.645 1.545a12.9 12.9 0 0 0-2.623-.107c-2.617.152-4.3 1.574-4.178 3.53.062.987.544 1.836 1.358 2.393.688.47 1.573.698 2.492.642 1.21-.074 2.16-.517 2.822-1.317.502-.607.82-1.386.975-2.388.584.352 1.016.812 1.26 1.375.414.957.438 2.531-.886 3.855-1.164 1.164-2.563 1.668-4.189 1.68-1.805-.014-3.17-.592-4.058-1.717-.828-1.05-1.26-2.56-1.283-4.49.024-1.93.455-3.44 1.283-4.49.888-1.126 2.253-1.703 4.058-1.718 1.82.015 3.212.597 4.134 1.728.448.549.788 1.235 1.02 2.039l1.4-.373a7.89 7.89 0 0 0-1.264-2.52C13.593 6.203 11.88 5.497 9.753 5.48h-.016c-2.114.017-3.81.727-5.04 2.11C3.636 8.87 3.107 10.687 3.08 12.934v.065c.028 2.248.557 4.065 1.618 5.345 1.23 1.383 2.926 2.093 5.04 2.11h.016c1.92-.014 3.613-.631 5.032-1.834 1.79-1.52 1.936-3.542 1.62-4.795a4.384 4.384 0 0 0-1.85-2.079Zm-3.228 3.144c-1.014.062-2.068-.398-2.13-1.388-.046-.733.52-1.55 2.64-1.673.231-.013.458-.02.68-.02a9.1 9.1 0 0 1 1.878.197c-.214 2.405-1.723 2.81-3.068 2.884Z" />
              </svg>
            </Link>          </div>
        </div>

        <Separator />

        <div className="py-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} tkBetter.app.{" "}
          {t("footer.copyright")}
        </div>
      </div>
    </footer>
  );
};

export default Footer04Page;