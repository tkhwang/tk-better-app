import { HeaderHome } from "@/components/header/header-home";
import { HeaderProjectTkcapturebook } from "@/components/header/project/header-project-tkcapturebook";
import { HeaderProjectTkCaptureBookPrivacy } from "@/components/header/project/header-project-tkcapturebook-privacy";
import { HeaderProjectTkCaptureBookTerms } from "@/components/header/project/header-project-tkcapturebook-terms";
import { useRouter } from "next/router";

export function Header() {
  const router = useRouter();

  switch (router.pathname) {
    case "/project/tkcapturebook":
      return <HeaderProjectTkcapturebook />;
    case "/project/tkcapturebook/terms":
      return <HeaderProjectTkCaptureBookTerms />;
    case "/project/tkcapturebook/privacy":
      return <HeaderProjectTkCaptureBookPrivacy />;
    default:
      return <HeaderHome />;
  }
}
