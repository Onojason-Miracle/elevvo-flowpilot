import React, { useState } from "react";
import { Rocket } from "lucide-react";
import ThemeToggle from "../ui/ThemeToggle";
import Container from "../ui/Container";
import { Link } from "react-router-dom";

const NAV_ITEMS = [
  { href: "#pricing", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#pricing", label: "Pricing" },
];

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-zinc-900/60">
      <Container>
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 text-white shadow">
              <Rocket className="h-5 w-5" />
            </span>
            <span className="text-lg">FlowPilot</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((n) => (
              <Link
                key={n.href}
                to={n.href}
                className="text-sm font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
              >
                {n.label}
              </Link>
            ))}

            <ThemeToggle withLabel />

            <Link
              to="/register"
              className="rounded-2xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow transition hover:bg-indigo-500"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile actions */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle withLabel={false} size="md" />
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Open menu"
              className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white p-2 shadow-sm transition hover:shadow dark:border-zinc-800 dark:bg-zinc-900"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
          <Container className="py-4">
            <div className="flex flex-col gap-3">
              {NAV_ITEMS.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium"
                >
                  {n.label}
                </a>
              ))}
              <a
                href="#cta"
                onClick={() => setMobileOpen(false)}
                className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow"
              >
                Get Started
              </a>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Navbar;
