"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export function Brand() {
  return (
    <>
      <span className="logo-mark">{"{/}"}</span>
      <span className="brand-name">
        Bitstack<span className="brand-subtitle">Solutions</span>
      </span>
    </>
  );
}

const navigation = [
  ["Services", "/services"],
  ["Work", "/work"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const reduce = useReducedMotion();
  useEffect(() => {
    function key(event: KeyboardEvent) {
      if (event.key === "Escape" && open) {
        setOpen(false);
        button.current?.focus();
      }
    }
    function click(event: MouseEvent) {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    }
    const desktop = matchMedia("(min-width: 821px)");
    const resize = () => {
      if (desktop.matches) setOpen(false);
    };
    document.addEventListener("keydown", key);
    document.addEventListener("click", click);
    desktop.addEventListener("change", resize);
    return () => {
      document.removeEventListener("keydown", key);
      document.removeEventListener("click", click);
      desktop.removeEventListener("change", resize);
    };
  }, [open]);
  return (
    <header className="nav" ref={header}>
      <div className="site-container nav-inner">
        <Link
          className="logo"
          href="/"
          aria-label="Bitstack Solutions home"
          onClick={() => setOpen(false)}
        >
          <Brand />
        </Link>
        <nav
          className={`nav-links ${open ? "open" : ""}`}
          id="navigation"
          aria-label="Main navigation"
        >
          {navigation.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={
                pathname === href ||
                (href === "/services" &&
                  ["/automation", "/integrations", "/web-development"].includes(
                    pathname,
                  ))
                  ? "active"
                  : ""
              }
              aria-current={pathname === href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link className="nav-cta" href="/contact">
          Start a project <span className="arr">↗</span>
        </Link>
        <button
          className="menu-toggle"
          ref={button}
          aria-controls="navigation"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "open"}
              className="inline-block"
              initial={{ rotate: -30, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 30, opacity: 0 }}
              transition={{ duration: reduce ? 0 : 0.12 }}
            >
              {open ? "×" : "☰"}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>
    </header>
  );
}
