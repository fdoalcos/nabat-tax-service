import Link from "next/link";

export default function IdentoGoCard() {
  return (
    <div className="col-span-12 identogo-card bg-surface-container-lowest p-12 hover:shadow-xl transition-all group">
      <span className="material-symbols-outlined text-4xl text-navy-accent mb-8 block">
        fingerprint
      </span>
      <h3 className="font-serif text-3xl mb-4">IdentoGo by IDEMIA</h3>
      <p className="text-on-surface-variant leading-relaxed mb-8 max-w-2xl">
        Secure electronic fingerprinting for employment, licensing, and identity
        verification.
      </p>
      <Link
        href="/identogo"
        className="inline-flex items-center gap-2 text-navy-accent font-bold tracking-tight border-b border-navy-accent pb-1 group-hover:gap-4 transition-all"
      >
        Learn More{" "}
        <span className="material-symbols-outlined text-sm">arrow_forward</span>
      </Link>
    </div>
  );
}
