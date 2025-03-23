import { Logo } from "@/components/logo";
import { GitHubIcon } from "@/icons/github";
import { ThreadsIcon } from "@/icons/threads";
import { TwitterIcon } from "@/icons/twitter";
import React from "react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 px-6 bg-secondary/30 border-t border-border">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <Logo />
            <p className="text-muted-foreground text-sm max-w-xs">
              A showcase of my work, skills, and experiences as a professional
              developer.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li> */}
              <li>
                <Link
                  to="/projects"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/blog"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li> */}
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social links */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-foreground">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/tkhwang"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="GitHub"
              >
                <GitHubIcon size={20} />
              </a>
              {/* <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a> */}
              {/* <a
                href="https://twitter.com/tkhwang"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon size={20} />
              </a> */}
              <a
                href="https://www.threads.net/@tkbetter.app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Threads"
              >
                <ThreadsIcon size={20} />
              </a>
              {/* <a
                href="mailto:contact@example.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a> */}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {currentYear} DevPortfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
