"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface" id="site-footer">
      <div className="max-w-[1000px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-foreground rounded-sm flex items-center justify-center">
                <span className="text-white font-heading font-bold text-xs">B</span>
              </div>
              <span className="font-heading font-semibold text-base">BackOnTrack</span>
            </Link>
            <p className="text-sm text-muted leading-relaxed">
              Evidence-based posture correction by a qualified physiotherapist. Fix the root cause, not the symptoms.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-4 uppercase tracking-wider">Navigate</h4>
            <ul className="space-y-2.5">
              {[
                { href: "/start-here", label: "Start Here" },
                { href: "/exercises", label: "Exercises" },
                { href: "/guides", label: "Guides" },

              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Conditions */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-4 uppercase tracking-wider">Conditions</h4>
            <ul className="space-y-2.5">
              {[
                { href: "/conditions/forward-head-posture", label: "Forward Head" },
                { href: "/conditions/rounded-shoulders", label: "Rounded Shoulders" },
                { href: "/conditions/anterior-pelvic-tilt", label: "Anterior Pelvic Tilt" },
                { href: "/conditions/kyphosis", label: "Kyphosis" },
                { href: "/conditions/knee-valgus", label: "Knee Valgus" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} BackOnTrack. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-muted hover:text-foreground transition-colors">Privacy</Link>
            <Link href="#" className="text-xs text-muted hover:text-foreground transition-colors">Terms</Link>
            <Link href="#" className="text-xs text-muted hover:text-foreground transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
