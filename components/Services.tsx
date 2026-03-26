import Link from "next/link";
import PersonalTaxCard from "./PersonalTaxCard";
import ServiceCard from "./ServiceCard";

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

          {/* Small Card — Business Tax Preparation */}
          <ServiceCard
            cardClass="col-span-12 md:col-span-5 min-w-0 bg-surface-container-lowest p-8 sm:p-12 hover:shadow-xl transition-all"
            icon="business_center"
            size="lg"
            title="Business Tax Preparation"
            description="Entity structuring and tax compliance for Boston's thriving startup and professional services scene."
            modalTitle="Business Tax Checklist"
            modalSubtitle="Gather your documents and we'll handle the rest."
            sections={[
              {
                category: "Financial Records",
                icon: "bar_chart",
                items: [
                  "Complete financial statements and general ledger",
                  "Prior year tax returns",
                  "Access to accounting records / software",
                  "Supporting documentation for key transactions",
                ],
              },
              {
                category: "Point of Contact",
                icon: "person",
                items: [
                  "Designated point of contact for coordination and inquiries",
                ],
              },
            ]}
          />

          {/* Three equal columns */}
          <ServiceCard
            cardClass="col-span-12 md:col-span-4 min-w-0 bg-surface-container-lowest p-7 sm:p-10 hover:shadow-xl transition-all"
            icon="description"
            size="sm"
            title="Application Assistance Programs"
            description="Guidance and filing support for federal and state benefit programs and financial aid applications."
            modalTitle="Application Assistance Checklist"
            modalSubtitle="Bring your documents and we'll guide you through the process."
            sections={[
              {
                category: "Financial Aid",
                icon: "school",
                items: [
                  "Financial aid forms (e.g., FAFSA)",
                ],
              },
              {
                category: "Health Coverage",
                icon: "health_and_safety",
                items: [
                  "Health coverage forms (e.g., 1095-A/B/C, MA 1099-HC)",
                ],
              },
              {
                category: "Income Documents",
                icon: "payments",
                items: [
                  "W-2 (from each employer)",
                  "1099-NEC / 1099-MISC (freelance or self-employment income)",
                  "SSA-1099 (Social Security benefits)",
                ],
              },
              {
                category: "Government Applications",
                icon: "account_balance",
                items: [
                  "Other government applications (e.g., SNAP, unemployment, housing assistance)",
                ],
              },
            ]}
          />

          <ServiceCard
            cardClass="col-span-12 md:col-span-4 min-w-0 bg-surface-container-lowest p-7 sm:p-10 hover:shadow-xl transition-all"
            icon="menu_book"
            size="sm"
            title="Bookkeeping Services"
            description="Pristine digital ledgers tailored for monthly or quarterly analysis."
            modalTitle="Bookkeeping Checklist"
            modalSubtitle="Share your records and we'll keep your books accurate and current."
            sections={[
              {
                category: "Monthly Records",
                icon: "receipt_long",
                items: [
                  "Monthly bank statements",
                  "Secure access to financial accounts (banking, credit cards, and liabilities)",
                  "Timely submission of monthly records and supporting documents",
                ],
              },
              {
                category: "Onboarding",
                icon: "folder_open",
                items: [
                  "Historical financial documentation for onboarding and accuracy",
                  "A primary client contact for coordination and inquiries",
                ],
              },
            ]}
          />

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
