"use client";

import { Menu, Sparkles, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "#onderwerpen", label: "Onderwerpen" },
  { href: "#zo-werkt-het", label: "Hoe het werkt" },
  { href: "#waarom", label: "Waarom" },
  { href: "#veelgestelde-vragen", label: "Veelgestelde vragen" },
];

export function HomeNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20 border-b border-border bg-card/90 backdrop-blur-sm">
      <nav
        className="mx-auto flex min-h-[76px] max-w-6xl items-center justify-between gap-6 px-5 sm:px-8"
        aria-label="Hoofdnavigatie"
      >
        <Link href="/" className="inline-flex items-center gap-2.5">
          <span className="grid size-9 place-items-center rounded-lg bg-primary text-gold">
            <Sparkles className="size-4" aria-hidden="true" />
          </span>
          <span className="text-base font-semibold tracking-tight">
            FastTicket<span className="text-gold-ink">Support</span>
          </span>
        </Link>

        <div
          id="hoofdnavigatie"
          className={`${open ? "flex" : "hidden"} absolute top-[76px] right-0 left-0 flex-col gap-1 border-b border-border bg-card px-5 py-3 shadow-sm lg:static lg:flex lg:flex-row lg:items-center lg:gap-7 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-2 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-gold-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-ink"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/inloggen"
            className="hidden rounded-lg border border-border bg-card px-3.5 py-2 text-sm font-medium text-foreground transition-colors hover:border-gold-ink sm:inline-flex"
          >
            Inloggen
          </Link>
          <Link
            href="/inloggen"
            className="inline-flex shrink-0 rounded-lg bg-primary px-3 py-2 text-sm font-medium whitespace-nowrap text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Ticket aanmaken
          </Link>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-lg border border-border bg-card text-foreground lg:hidden"
            aria-controls="hoofdnavigatie"
            aria-expanded={open}
            aria-label={open ? "Sluit menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>
    </header>
  );
}
