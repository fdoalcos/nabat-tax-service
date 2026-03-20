export default function QuoteSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-on-background overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#755b00_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </div>
      <div className="relative z-10 max-w-screen-xl mx-auto px-8 text-center">
        <span className="material-symbols-outlined text-6xl text-primary-container mb-12 block">
          format_quote
        </span>
        <h2 className="font-serif italic text-4xl md:text-6xl text-surface leading-tight">
          &ldquo;Expertise you can trust, precision <br className="hidden md:block" />
          you can count on.&rdquo;
        </h2>
        <div className="h-[2px] w-32 bg-primary mx-auto mt-16"></div>
        <p className="mt-8 font-sans font-bold text-primary-container uppercase tracking-widest text-sm">
          Nabat Tax Service Collective
        </p>
      </div>
    </section>
  );
}
