import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-low dark:bg-surface-container-low-dark w-full py-12 px-8 border-t border-outline-variant/10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-screen-2xl mx-auto">
        <div className="space-y-4 text-center md:text-left">
          <div className="font-serif text-xl text-primary">Nabat Tax Service</div>
          <p className="font-sans text-sm text-on-surface-variant">
            © 2025 Nabat Tax Service. The Digital Atelier.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          <Link
            href="/#contact"
            className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/#services"
            className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors"
          >
            Terms of Service
          </Link>
          <Link
            href="/identogo"
            className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors"
          >
            Regulatory Disclosures
          </Link>
        </div>

        <div className="flex gap-6">
          <a
            href="mailto:NabatTaxService@gmail.com"
            aria-label="Email Nabat Tax Service"
            className="text-on-surface-variant hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined">share</span>
          </a>
          <a
            href="tel:9789088000"
            aria-label="Call Nabat Tax Service"
            className="text-on-surface-variant hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined">hub</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
