import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IdentoGo Fingerprinting | Nabat Tax Service | Boston, MA",
  description:
    "Authorized IdentoGo by IDEMIA fingerprinting services at Nabat Tax Service in Boston, MA. Schedule your electronic fingerprinting appointment today.",
};

export default function IdentoGoPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-32 pb-20 px-8 overflow-hidden bg-navy-accent">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        <div className="relative z-10 max-w-screen-2xl mx-auto w-full">
          <div className="max-w-3xl space-y-8">
            <span className="material-symbols-outlined text-7xl text-white/60 block">
              fingerprint
            </span>
            <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-white font-sans text-xs font-bold uppercase tracking-[0.2em]">
              Authorized Provider • Boston, MA
            </span>
            <h1 className="font-serif text-5xl md:text-7xl leading-tight text-white">
              IdentoGo by{" "}
              <span className="italic opacity-80">IDEMIA</span>
            </h1>
            <p className="font-sans text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl font-light">
              Secure, fast, and reliable electronic fingerprinting services for
              employment, licensing, and identity verification — right here at
              Nabat Tax Service in Boston.
            </p>
            <a
              href="https://www.identogo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-navy-accent px-10 py-5 rounded-lg font-sans font-semibold tracking-wide shadow-lg transition-transform hover:-translate-y-1"
            >
              Schedule Appointment
              <span className="material-symbols-outlined text-sm">
                calendar_month
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* What is IdentoGo */}
      <section className="py-[100px] px-8 bg-surface">
        <div className="max-w-screen-2xl mx-auto grid md:grid-cols-2 gap-20 items-start">
          <div className="space-y-6">
            <p className="text-navy-accent font-sans text-xs font-bold uppercase tracking-[0.3em]">
              About the Service
            </p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              What is <span className="italic">IdentoGo?</span>
            </h2>
            <div className="h-1 w-24 bg-navy-accent"></div>
            <p className="font-sans text-lg text-on-surface-variant leading-relaxed">
              IdentoGo, powered by IDEMIA, is the leading provider of identity
              services in the United States. As an authorized enrollment
              location, Nabat Tax Service offers Live Scan electronic
              fingerprinting — a fast, clean, and accurate digital alternative
              to traditional ink-and-roll fingerprinting.
            </p>
            <p className="font-sans text-lg text-on-surface-variant leading-relaxed">
              Your fingerprints are captured digitally and submitted directly to
              the appropriate agency, eliminating the need for messy ink pads
              and reducing processing time significantly.
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-navy-accent font-sans text-xs font-bold uppercase tracking-[0.3em]">
              Who Needs It
            </p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Common <span className="italic">Use Cases</span>
            </h2>
            <div className="h-1 w-24 bg-navy-accent"></div>
            <ul className="space-y-4">
              {[
                "Employment background checks",
                "Professional licensing (nursing, teaching, law, finance)",
                "Federal and state government applications",
                "Adoption and foster care requirements",
                "Immigration and visa applications",
                "Financial industry compliance (FINRA, insurance)",
                "Volunteer and non-profit background screening",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 font-sans text-on-surface-variant">
                  <span className="material-symbols-outlined text-navy-accent text-sm">
                    check_circle
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-[100px] px-8 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-16 space-y-4">
            <p className="text-navy-accent font-sans text-xs font-bold uppercase tracking-[0.3em]">
              How It Works
            </p>
            <h2 className="font-serif text-4xl md:text-5xl">
              The Process
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: "calendar_month",
                title: "Schedule",
                desc: "Visit identogo.com to book your appointment online. Walk-ins welcome based on availability.",
              },
              {
                step: "02",
                icon: "badge",
                title: "Bring Your ID",
                desc: "Arrive with a valid government-issued photo ID and your ORI number or agency code.",
              },
              {
                step: "03",
                icon: "fingerprint",
                title: "Get Printed",
                desc: "The entire process takes approximately 10–15 minutes. Results are transmitted electronically the same day.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="identogo-card bg-surface-container-lowest p-10 hover:shadow-xl transition-all"
              >
                <div className="text-5xl font-serif text-navy-accent/20 mb-4">
                  {item.step}
                </div>
                <span className="material-symbols-outlined text-3xl text-navy-accent mb-4 block">
                  {item.icon}
                </span>
                <h3 className="font-serif text-2xl mb-3">{item.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-[120px] bg-navy-accent overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        <div className="relative z-10 max-w-screen-xl mx-auto px-8 text-center space-y-8">
          <h2 className="font-serif italic text-4xl md:text-5xl text-white">
            Ready to get fingerprinted?
          </h2>
          <p className="font-sans text-white/70 text-lg max-w-xl mx-auto">
            Call us or stop by our Boston office. No long waits, no complicated
            process — just professional, efficient service.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:9789088000"
              className="inline-flex items-center gap-2 justify-center bg-white text-navy-accent px-10 py-5 rounded-lg font-sans font-semibold tracking-wide shadow-lg transition-transform hover:-translate-y-1"
            >
              <span className="material-symbols-outlined text-sm">call</span>
              (978) 908-8000
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 justify-center border border-white/40 text-white px-10 py-5 rounded-lg font-sans font-semibold tracking-wide transition-colors hover:bg-white/10"
            >
              <span className="material-symbols-outlined text-sm">mail</span>
              Send a Message
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
