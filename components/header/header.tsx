"use client";

import { HeaderHome } from "@/components/header/header-home";
import { HeaderProjectTkcaptureBook } from "@/components/header/project/header-project-tkcapturebook";
import { HeaderProjectTkCaptureBookPrivacy } from "@/components/header/project/header-project-tkcapturebook-privacy";
import { HeaderProjectTkCaptureBookTerms } from "@/components/header/project/header-project-tkcapturebook-terms";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  const isProjectTkCaptureBook = pathname === "/project/tkcapturebook";
  const isProjectTkCaptureBookTerms =
    pathname === "/project/tkcapturebook/terms";
  const isProjectTkCaptureBookPrivacy =
    pathname === "/project/tkcapturebook/privacy";

  if (isProjectTkCaptureBook) return <HeaderProjectTkcaptureBook />;
  if (isProjectTkCaptureBookTerms) return <HeaderProjectTkCaptureBookTerms />;
  if (isProjectTkCaptureBookPrivacy)
    return <HeaderProjectTkCaptureBookPrivacy />;

  return <HeaderHome />;
}
