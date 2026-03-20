"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

let hasInitialized = false;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const pathname = usePathname();
  const isScrollingRef = useRef(false);
  const scrollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navigateTo = (hash: string, scrollFn: () => void) => {
    isScrollingRef.current = true;
    setActiveHash(hash);
    scrollFn();
    if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
    scrollTimerRef.current = setTimeout(() => {
      isScrollingRef.current = false;
    }, 1000);
  };

  const isHome = pathname === "/";
  const href = (anchor: string) => (isHome ? anchor : `/${anchor}`);

  useEffect(() => {
    window.history.scrollRestoration = "manual";

    if (!hasInitialized) {
      hasInitialized = true;
      const navEntry = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;
      if (navEntry?.type === "reload") {
        window.scrollTo(0, 0);
        window.history.replaceState(null, document.title, window.location.pathname);
      }
    }

    const sections = ["about", "services", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isScrollingRef.current) {
            setActiveHash(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const onScroll = () => {
      if (window.scrollY < 100 && !isScrollingRef.current) setActiveHash("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const linkClass = (hash: string) => {
    const isActive = isHome && (activeHash === hash || (hash === "" && activeHash === ""));
    return [
      "font-serif text-lg tracking-tight transition-colors",
      isActive
        ? "text-primary border-b-2 border-primary pb-1"
        : "text-on-surface-variant hover:text-primary",
    ].join(" ");
  };

  const identoGoClass = [
    "relative font-serif text-lg tracking-tight transition-colors flex items-center gap-1",
    pathname === "/identogo"
      ? "text-primary border-b-2 border-primary pb-1"
      : "text-on-surface-variant hover:text-primary",
  ].join(" ");

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md shadow-sm transition-all duration-300 ease-in-out glass-nav">
        <div className="flex justify-between items-center w-full px-8 py-6 max-w-screen-2xl mx-auto">
          <div className="text-2xl font-serif italic text-primary tracking-tight">
            Nabat Tax Service
          </div>

          <div className="hidden md:flex items-center gap-10">
            <Link
              href={href("#")}
              className={linkClass("")}
              onClick={(e) => {
                if (!isHome) return;
                e.preventDefault();
                navigateTo("", () => window.scrollTo({ top: 0, behavior: "smooth" }));
              }}
            >
              Home
            </Link>
            <Link
              href={href("#about")}
              className={linkClass("#about")}
              onClick={() => { if (isHome) navigateTo("#about", () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })); }}
            >
              About
            </Link>
            <Link
              href={href("#services")}
              className={linkClass("#services")}
              onClick={() => { if (isHome) navigateTo("#services", () => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })); }}
            >
              Services
            </Link>
            <Link
              href="/identogo"
              className={identoGoClass}
            >
              IdentoGo
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-container"></span>
            </Link>
            <Link
              href={href("#contact")}
              className={linkClass("#contact")}
              onClick={() => { if (isHome) navigateTo("#contact", () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })); }}
            >
              Contact Us
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <button
              className="md:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-on-surface">
                {menuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-surface px-8 py-6 flex flex-col gap-6 border-t border-outline-variant/20">
            <Link href={href("#")} onClick={(e) => { if (!isHome) return; e.preventDefault(); setMenuOpen(false); navigateTo("", () => window.scrollTo({ top: 0, behavior: "smooth" })); }} className="font-serif text-lg text-primary">Home</Link>
            <Link href={href("#about")} onClick={() => { setMenuOpen(false); if (isHome) navigateTo("#about", () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })); }} className="font-serif text-lg text-on-surface-variant">About</Link>
            <Link href={href("#services")} onClick={() => { setMenuOpen(false); if (isHome) navigateTo("#services", () => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })); }} className="font-serif text-lg text-on-surface-variant">Services</Link>
            <Link href="/identogo" onClick={() => setMenuOpen(false)} className={identoGoClass}>
              IdentoGo
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-container"></span>
            </Link>
            <Link href={href("#contact")} onClick={() => { setMenuOpen(false); if (isHome) navigateTo("#contact", () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })); }} className="font-serif text-lg text-on-surface-variant">Contact Us</Link>
          </div>
        )}
      </nav>

      {/* Mobile sticky FAB */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 md:hidden z-50">
        <Link
          href={href("#contact")}
          className="gradient-cta text-on-primary px-8 py-4 rounded-full font-sans font-semibold tracking-wide shadow-lg flex items-center gap-2 hover:scale-105 active:scale-95 transition-transform"
        >
          <span className="material-symbols-outlined text-sm">mail</span>
          Contact Us
        </Link>
      </div>
    </>
  );
}
