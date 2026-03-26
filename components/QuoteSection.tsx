export default function QuoteSection() {
  return (
    <section className="relative py-32 flex items-center justify-center bg-navy-accent overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </div>
      <div className="relative z-10 max-w-screen-xl mx-auto px-8 text-center">
        <span className="material-symbols-outlined text-6xl text-white/60 mb-12 block">
          format_quote
        </span>
        <h2 className="font-serif italic text-4xl md:text-6xl text-white leading-tight">
          &ldquo;Expertise you can trust, precision <br className="hidden md:block" />
          you can count on.&rdquo;
        </h2>
        <div className="h-[2px] w-32 bg-white/30 mx-auto mt-16"></div>
        <p className="mt-8 font-sans font-bold text-white/70 uppercase tracking-widest text-sm">
          Nabat Tax Service
        </p>
      </div>
    </section>
  );
}
