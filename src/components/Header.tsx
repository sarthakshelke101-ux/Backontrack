"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/start-here", label: "Start Here" },
  { href: "/conditions", label: "Conditions" },
  { href: "/exercises", label: "Exercises" },
  { href: "/guides", label: "Guides" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-border shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
          : "bg-white"
      }`}
    >
      <div className="max-w-[1000px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group" id="logo-link">
          <div className="w-8 h-8 bg-foreground rounded-sm flex items-center justify-center transition-transform group-hover:scale-105">
            <span className="text-white font-heading font-bold text-sm">B</span>
          </div>
          <span className="font-heading font-semibold text-lg tracking-tight">
            BackOnTrack
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" id="desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 relative ${
                pathname === link.href
                  ? "text-foreground"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-foreground" />
              )}
            </Link>
          ))}

        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center"
          aria-label="Toggle menu"
          id="mobile-menu-toggle"
        >
          <div className="space-y-1.5">
            <span
              className={`block w-5 h-px bg-foreground transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-foreground transition-opacity duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-foreground transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-white animate-slide-down" id="mobile-menu">
          <nav className="max-w-[1000px] mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-medium py-2 ${
                  pathname === link.href ? "text-foreground" : "text-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}

          </nav>
        </div>
      )}
    </header>
  );
}
