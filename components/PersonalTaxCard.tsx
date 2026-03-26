"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const CHECKLIST = [
  {
    category: "Personal Information",
    icon: "person",
    items: [
      "Social Security Numbers (you, spouse, dependents)",
      "Prior year tax return (for reference)",
      "Bank account & routing number (for direct deposit)",
      "Photo ID / Driver's License",
    ],
  },
  {
    category: "Income Documents",
    icon: "payments",
    items: [
      "W-2 (from each employer)",
      "1099-NEC / 1099-MISC (freelance or self-employment income)",
      "1099-INT (bank interest income)",
      "1099-DIV (dividend income)",
      "1099-B (stock / investment sales)",
      "1099-R (retirement distributions — IRA, 401k, pension)",
      "SSA-1099 (Social Security benefits)",
      "K-1 (partnership or S-Corp income)",
    ],
  },
  {
    category: "Deductions & Credits",
    icon: "receipt_long",
    items: [
      "1098 (mortgage interest statement)",
      "1098-T (tuition / education expenses)",
      "1098-E (student loan interest)",
      "Charitable donation receipts",
      "Medical & dental expense records",
      "Child care expenses & provider's Tax ID",
      "HSA contributions (Form 5498-SA)",
    ],
  },
  {
    category: "Healthcare",
    icon: "health_and_safety",
    items: [
      "1095-A (if you had ACA / Marketplace insurance)",
      "Proof of health coverage (employer-sponsored plans)",
    ],
  },
];

const TOTAL = CHECKLIST.reduce((sum, cat) => sum + cat.items.length, 0);

export default function PersonalTaxCard() {
  const [isOpen, setIsOpen] = useState(false);
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const backdropRef = useRef<HTMLDivElement>(null);

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
      {/* Card */}
      <div className="col-span-12 md:col-span-7 min-w-0 dossier-card bg-surface-container-lowest p-8 sm:p-12 hover:shadow-xl transition-all group">
        <span className="material-symbols-outlined text-4xl text-primary mb-8 block">
          account_balance
        </span>
        <h3 className="font-serif text-3xl mb-4">Personal Tax Preparation</h3>
        <p className="text-on-surface-variant leading-relaxed mb-8 max-w-md">
          Comprehensive individual filings with a focus on multi-state
          complexities and investment income optimization.
        </p>
        <button
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center gap-2 text-primary font-bold tracking-tight border-b border-primary pb-1 group-hover:gap-4 transition-all"
        >
          Learn More
          <span className="material-symbols-outlined text-sm">
            arrow_forward
          </span>
        </button>
      </div>

      {/* Modal */}
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
                  1040 Filing
                </p>
                <h2 className="font-serif text-2xl text-on-surface">
                  Personal Tax Checklist
                </h2>
                <p className="text-sm text-on-surface-variant mt-1">
                  {checked.size} of {TOTAL} items ready
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-on-surface-variant hover:text-on-surface transition-colors flex-shrink-0 mt-1"
                aria-label="Close checklist"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Progress bar */}
            <div className="h-1 bg-outline-variant flex-shrink-0">
              <div
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${(checked.size / TOTAL) * 100}%` }}
              />
            </div>

            {/* Checklist body */}
            <div className="px-8 py-6 space-y-8 flex-1">
              {CHECKLIST.map((section) => (
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
                              {isChecked
                                ? "check_box"
                                : "check_box_outline_blank"}
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
                  Ready to file?
                </p>
                <p className="text-sm text-on-surface-variant">
                  Bring your documents and we&apos;ll handle the rest.
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
