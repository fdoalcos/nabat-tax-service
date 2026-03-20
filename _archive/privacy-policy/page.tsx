import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Nabat Tax Service",
  description: "Privacy Policy for Nabat Tax Service, Boston, MA.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      <section className="pt-40 pb-20 px-8 bg-surface min-h-screen">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="space-y-4">
            <p className="text-primary font-sans text-xs font-bold uppercase tracking-[0.3em]">
              Legal
            </p>
            <h1 className="font-serif text-5xl">Privacy Policy</h1>
            <p className="font-sans text-sm text-on-surface-variant">
              Effective Date: January 1, 2025
            </p>
          </div>

          <div className="space-y-8 font-sans text-on-surface-variant leading-relaxed">
            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-on-surface">1. Information We Collect</h2>
              <p>
                Nabat Tax Service collects personal information you voluntarily provide when contacting us or scheduling an appointment. This may include your name, email address, phone number, and any financial or tax-related information necessary to provide our services.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-on-surface">2. How We Use Your Information</h2>
              <p>
                We use the information we collect solely to provide tax preparation, bookkeeping, notary, and fingerprinting services. Your information is never sold, traded, or rented to third parties.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To respond to your inquiries and service requests</li>
                <li>To prepare and file your tax documents</li>
                <li>To comply with applicable federal and state laws</li>
                <li>To communicate important updates regarding your services</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-on-surface">3. Data Security</h2>
              <p>
                We take the security of your personal and financial information seriously. All sensitive data is handled in accordance with IRS guidelines and applicable privacy laws. Physical documents are stored securely and digital records are protected with appropriate safeguards.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-on-surface">4. Sharing of Information</h2>
              <p>
                We do not share your personal information with third parties except as required by law (e.g., filing with the IRS or state tax agencies on your behalf), or with your explicit written consent.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-on-surface">5. Retention</h2>
              <p>
                We retain your records for as long as required by federal and state tax regulations, typically seven (7) years, after which they are securely destroyed.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-on-surface">6. Your Rights</h2>
              <p>
                You have the right to request access to, correction of, or deletion of your personal information, subject to legal retention requirements. To make such a request, please contact us directly.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-on-surface">7. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please reach out to us:
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
