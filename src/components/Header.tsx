import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { title: "Home", path: "/" },
    { title: "Projects", path: "/projects" },
    { title: "Contact", path: "/contact" },
  ];

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300 px-6 flex items-center justify-between",
        isScrolled ? "h-16 glass shadow-sm" : "h-20 bg-transparent"
      )}
    >
      {/* Logo */}
      <Link
        to="/"
        className="text-xl font-display font-bold tracking-tight relative z-10 text-primary-foreground animate-fade-in"
      >
        <span className="text-primary">Dev</span>Portfolio
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8">
        {menuItems.map((item, index) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "relative px-1 py-2 text-sm font-medium transition-colors hover-effect",
              location.pathname === item.path
                ? "text-primary"
                : "text-foreground/80 hover:text-foreground",
              `animation-delay-${index * 200}`
            )}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {item.title}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden text-foreground z-20"
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-10 flex items-center justify-center md:hidden animate-fade-in">
          <nav className="flex flex-col items-center space-y-8 p-8">
            {menuItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-lg font-medium transition-colors hover-effect",
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-foreground/80 hover:text-foreground",
                  "animate-slide-in"
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
