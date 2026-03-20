import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEajCaSlObhnzGeT1LEC9GxdunoRckFW3W2Zo-aUM5vcnb3GEJSjyqKNwUXQiUlDfX9-uDi0vgiUFxu4iTZ5f_Oq44c0YtiLiFDfMZBgFy38XcB7yn3_o0GY-JcqVRgj3nVDIK4rQn4GJfbWhH0rF0VW0xUC8Bm9snqPrL-qRCEJoU7DkFRY3SB-45KQP1TIv23AqhxhMPfbNWNEFy94JRlMSxTdK_ZVojpVUyi9Sw7aTevAo-4kKiH8-9ljX6vd4NvfB_HZl40Bc"
          alt="Abstract architectural view of tax forms and sophisticated financial dossiers"
          fill
          className="object-cover grayscale opacity-30 dark:opacity-10"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface"></div>
      </div>

      <div className="relative z-10 max-w-screen-2xl mx-auto px-8 w-full">
        <div className="max-w-4xl space-y-10">
          <span className="inline-block px-4 py-1 rounded-full bg-surface-container-high text-primary font-sans text-xs font-bold uppercase tracking-[0.2em]">
            Boutique Advisory • Boston, MA
          </span>
          <h1 className="font-serif text-6xl md:text-8xl leading-[1.05] tracking-tight text-on-surface">
            Precision Tax Strategy for <br />
            <span className="italic text-primary">
              Boston&apos;s Modern Professional.
            </span>
          </h1>
          <p className="font-sans text-xl md:text-2xl text-on-surface-variant leading-relaxed max-w-2xl font-light">
            Nabat Tax Service provides sophisticated tax strategy and financial
            dossiers for Boston&apos;s most discerning modern professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <Link
              href="#contact"
              className="gradient-cta text-on-primary px-10 py-5 rounded-lg font-sans font-semibold tracking-wide text-center shadow-lg transition-transform hover:-translate-y-1"
            >
              Contact Us
            </Link>
            <Link
              href="#services"
              className="bg-surface-container-highest text-primary px-10 py-5 rounded-lg font-sans font-semibold tracking-wide text-center border border-[#C9A84C] hover:bg-surface-container-high transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
