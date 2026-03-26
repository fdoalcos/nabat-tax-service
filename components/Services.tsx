import Link from "next/link";
import PersonalTaxCard from "./PersonalTaxCard";

export default function Services() {
  return (
    <section className="min-h-screen py-24 px-5 sm:px-8 bg-surface-container-low scroll-mt-12" id="services">
      <div className="max-w-screen-2xl mx-auto">
        <div className="mb-20 space-y-4">
          <p className="text-primary font-sans text-xs font-bold uppercase tracking-[0.3em]">
            Curated Solutions
          </p>
          <h2 className="font-serif text-5xl">The Service Portfolio</h2>
        </div>

        <div className="asymmetric-grid">
          {/* Large Card — Personal Tax Preparation */}
          <PersonalTaxCard />

          {/* Small Card — Business Strategy */}
          <div className="col-span-12 md:col-span-5 min-w-0 bg-surface-container-lowest p-8 sm:p-12 hover:shadow-xl transition-all group">
            <span className="material-symbols-outlined text-4xl text-primary mb-8 block">
              business_center
            </span>
            <h3 className="font-serif text-3xl mb-4">Business Tax Preparation</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Entity structuring and tax compliance for Boston&apos;s thriving
              startup and professional services scene.
            </p>
          </div>

          {/* Three equal columns */}
          <div className="col-span-12 md:col-span-4 min-w-0 bg-surface-container-lowest p-7 sm:p-10 hover:shadow-xl transition-all">
            <span className="material-symbols-outlined text-3xl text-primary mb-6 block">
              description
            </span>
            <h4 className="font-serif text-2xl mb-2">Federal &amp; State Forms</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Meticulous handling of all 50 states and federal jurisdictions.
            </p>
          </div>

          <div className="col-span-12 md:col-span-4 min-w-0 bg-surface-container-lowest p-7 sm:p-10 hover:shadow-xl transition-all">
            <span className="material-symbols-outlined text-3xl text-primary mb-6 block">
              menu_book
            </span>
            <h4 className="font-serif text-2xl mb-2">Bookkeeping Services</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Pristine digital ledgers tailored for monthly or quarterly
              analysis.
            </p>
          </div>

          <div className="col-span-12 md:col-span-4 min-w-0 bg-surface-container-lowest p-7 sm:p-10 hover:shadow-xl transition-all">
            <span className="material-symbols-outlined text-3xl text-primary mb-6 block">
              history_edu
            </span>
            <h4 className="font-serif text-2xl mb-2">Notary Services</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              On-site notary services for legal and financial
              documentation.
            </p>
          </div>

          {/* IdentoGo Card — full width */}
          <div className="col-span-12 min-w-0 identogo-card bg-surface-container-lowest p-8 sm:p-12 hover:shadow-xl transition-all group">
            <span className="material-symbols-outlined text-4xl text-navy-accent mb-8 block">
              fingerprint
            </span>
            <h3 className="font-serif text-3xl mb-4">IdentoGo by IDEMIA</h3>
            <p className="text-on-surface-variant leading-relaxed mb-8 max-w-2xl">
              Secure electronic fingerprinting for employment, licensing, and
              identity verification.
            </p>
            <Link
              href="/identogo"
              className="inline-flex items-center gap-2 text-navy-accent font-bold tracking-tight border-b border-navy-accent pb-1 group-hover:gap-4 transition-all"
            >
              Learn More{" "}
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
