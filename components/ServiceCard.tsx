"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

interface ChecklistSection {
  category: string;
  icon: string;
  items: string[];
}

interface ServiceCardProps {
  cardClass: string;
  icon: string;
  size: "lg" | "sm";
  title: string;
  description: string;
  modalTitle: string;
  modalSubtitle: string;
  sections: ChecklistSection[];
}

export default function ServiceCard({
  cardClass,
  icon,
  size,
  title,
  description,
  modalTitle,
  modalSubtitle,
  sections,
}: ServiceCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const backdropRef = useRef<HTMLDivElement>(null);

  const total = sections.reduce((sum, s) => sum + s.items.length, 0);

  const toggle = (item: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(item)) next.delete(item);
      else next.add(item);
      return next;
    });
  };

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div className={cardClass}>
        <span
          className={`material-symbols-outlined text-primary block ${
            size === "lg" ? "text-4xl mb-8" : "text-3xl mb-6"
          }`}
        >
          {icon}
        </span>
        <h3
          className={`font-serif ${
            size === "lg" ? "text-3xl mb-4" : "text-2xl mb-2"
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-on-surface-variant leading-relaxed ${
            size === "lg" ? "mb-8 max-w-md" : "text-sm mb-6"
          }`}
        >
          {description}
        </p>
        <button
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center gap-2 text-primary font-bold tracking-tight border-b border-primary pb-1 hover:gap-4 transition-all"
        >
          Learn More
          <span className="material-symbols-outlined text-sm">
            arrow_forward
          </span>
        </button>
      </div>

      {isOpen && (
        <div
          ref={backdropRef}
          className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === backdropRef.current) setIsOpen(false);
          }}
        >
          <div className="bg-surface-container-lowest w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-lg shadow-2xl flex flex-col">
            {/* Header */}
            <div className="sticky top-0 bg-surface-container-lowest border-b border-outline-variant px-8 py-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-primary font-sans text-xs font-bold uppercase tracking-[0.3em] mb-1">
                  Application Checklist
                </p>
                <h2 className="font-serif text-2xl text-on-surface">
                  {modalTitle}
                </h2>
                <p className="text-sm text-on-surface-variant mt-1">
                  {checked.size} of {total} items ready
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-on-surface-variant hover:text-on-surface transition-colors flex-shrink-0 mt-1"
                aria-label="Close"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Progress bar */}
            <div className="h-1 bg-outline-variant flex-shrink-0">
              <div
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${(checked.size / total) * 100}%` }}
              />
            </div>

            {/* Checklist body */}
            <div className="px-8 py-6 space-y-8 flex-1">
              {sections.map((section) => (
                <div key={section.category}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="material-symbols-outlined text-xl text-primary">
                      {section.icon}
                    </span>
                    <h3 className="font-sans font-bold text-xs uppercase tracking-[0.25em] text-on-surface-variant">
                      {section.category}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {section.items.map((item) => {
                      const isChecked = checked.has(item);
                      return (
                        <li key={item}>
                          <button
                            onClick={() => toggle(item)}
                            className="flex items-start gap-3 w-full text-left"
                          >
                            <span
                              className={`material-symbols-outlined text-xl flex-shrink-0 mt-0.5 transition-colors ${
                                isChecked ? "text-primary" : "text-outline"
                              }`}
                              style={{
                                fontVariationSettings: isChecked
                                  ? "'FILL' 1, 'wght' 300, 'GRAD' 0, 'opsz' 24"
                                  : "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24",
                              }}
                            >
                              {isChecked ? "check_box" : "check_box_outline_blank"}
                            </span>
                            <span
                              className={`text-sm leading-relaxed transition-colors ${
                                isChecked
                                  ? "text-on-surface-variant line-through"
                                  : "text-on-surface"
                              }`}
                            >
                              {item}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-surface-container-lowest border-t border-outline-variant px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-serif text-lg text-on-surface">
                  Ready to get started?
                </p>
                <p className="text-sm text-on-surface-variant">
                  {modalSubtitle}
                </p>
              </div>
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center gap-2 gradient-cta text-on-primary px-6 py-3 font-sans font-semibold tracking-wide rounded hover:opacity-90 transition-opacity flex-shrink-0"
              >
                Contact Us
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
