import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Nabat Tax Service",
  description: "Terms of Service for Nabat Tax Service, Boston, MA.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />

      <section className="pt-40 pb-20 px-8 bg-surface min-h-screen">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="space-y-4">
            <p className="text-primary font-sans text-xs font-bold uppercase tracking-[0.3em]">
              Legal
            </p>
            <h1 className="font-serif text-5xl">Terms of Service</h1>
            <p className="font-sans text-sm text-on-surface-variant">
              Effective Date: January 1, 2025
            </p>
          </div>

          <div className="space-y-8 font-sans text-on-surface-variant leading-relaxed">
            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-on-surface">1. Services Provided</h2>
              <p>
                Nabat Tax Service offers personal and business tax preparation, bookkeeping, notary services, and IdentoGo fingerprinting as an authorized IDEMIA provider. All services are provided by appointment and are subject to availability.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-on-surface">2. Client Responsibilities</h2>
              <p>
                Clients are responsible for providing accurate, complete, and timely information required for the preparation of tax returns and other documents. Nabat Tax Service is not liable for errors or penalties resulting from incomplete or inaccurate information provided by the client.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-on-surface">3. Fees and Payment</h2>
              <p>
                Service fees are discussed and agreed upon prior to the commencement of work. Fees are due at the time of service unless a separate written arrangement is made. Nabat Tax Service reserves the right to adjust pricing with prior notice.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-on-surface">4. Appointments</h2>
              <p>
                Services are provided by appointment only to ensure dedicated, focused attention for each client. Walk-ins may be accommodated based on availability. Please contact us to schedule your appointment.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-on-surface">5. Limitation of Liability</h2>
              <p>
                Nabat Tax Service shall not be held liable for any penalties, interest, or damages arising from tax filings, except in cases of proven gross negligence on our part. Our liability is limited to the fees paid for the specific service in question.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-on-surface">6. Confidentiality</h2>
              <p>
                All client information is treated with strict confidentiality in accordance with our Privacy Policy and applicable federal and state laws. We do not disclose client information to any third party without written consent, except as required by law.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-on-surface">7. Governing Law</h2>
              <p>
                These Terms of Service are governed by the laws of the Commonwealth of Massachusetts. Any disputes arising from our services shall be resolved in the appropriate courts of Massachusetts.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-on-surface">8. Changes to Terms</h2>
              <p>
                Nabat Tax Service reserves the right to update these Terms of Service at any time. Continued use of our services after any changes constitutes your acceptance of the revised terms.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-on-surface">9. Contact Us</h2>
              <p>
                For questions regarding these Terms of Service, please contact us:
              </p>
              <div className="space-y-1">
                <p>Nabat Tax Service</p>
                <p>Boston, MA</p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:NabatTaxService@gmail.com"
                    className="text-primary underline underline-offset-4"
                  >
                    NabatTaxService@gmail.com
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a href="tel:9789088000" className="text-primary underline underline-offset-4">
                    (978) 908-8000
                  </a>
                </p>
              </div>
            </section>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary font-sans font-bold text-sm border-b border-primary pb-1 hover:gap-4 transition-all"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to Home
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
