import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-low dark:bg-surface-container-low-dark w-full py-12 px-8 border-t border-outline-variant/10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-screen-2xl mx-auto">
        <div className="space-y-4 text-center md:text-left">
          <div className="font-serif text-xl text-primary">Nabat Tax Service</div>
          <p className="font-sans text-sm text-on-surface-variant">
            © 2025 Nabat Tax Service.
          </p>
        </div>

<div className="flex gap-6">
          <a
            href="https://www.facebook.com/nabatnam4/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Nabat Tax Service on Facebook"
            className="text-on-surface-variant hover:text-primary transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898v-2.89h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
