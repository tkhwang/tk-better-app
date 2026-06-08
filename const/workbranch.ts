export const WORKBRANCH = {
  repoUrl: "https://github.com/tkhwang/workbranch",
  brewInstall: "brew install tkhwang/tap/workbranch",
  curlInstall:
    "curl -fsSL https://raw.githubusercontent.com/tkhwang/workbranch/main/install.sh | bash",
  // Shown in the hero terminal mockup. Code stays the same across languages.
  quickStart: [
    "workbranch init",
    "workbranch add",
    "cd feat+login/<repo>",
    "workbranch update feat+login",
    "workbranch push feat+login",
  ],
} as const;
