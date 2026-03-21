import Image from "next/image";

export default function About() {
  return (
    <section className="min-h-screen flex items-center px-8 bg-surface scroll-mt-12" id="about">
      <div className="max-w-screen-2xl mx-auto grid md:grid-cols-2 gap-20 items-center w-full py-24">
        <div className="space-y-8">
          <h2 className="font-serif text-5xl md:text-6xl leading-tight">
            Personalized Tax Strategy for the{" "}
            <span className="italic">Modern Bostonian</span>
          </h2>
          <div className="h-1 w-24 bg-primary"></div>
          <p className="font-sans text-lg text-on-surface-variant leading-relaxed">
            Based in Boston, we handle your taxes with accuracy and personal attention — no shortcuts, no fluff.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-8">
            <div>
              <div className="text-4xl font-serif text-primary mb-2">15+</div>
              <div className="text-xs uppercase tracking-widest font-bold text-on-surface-variant">
                Years Expertise
              </div>
            </div>
            <div>
              <div className="text-4xl font-serif text-primary mb-2">2.5k</div>
              <div className="text-xs uppercase tracking-widest font-bold text-on-surface-variant">
                Client Portfolios
              </div>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-4 bg-surface-container-low rounded-xl -z-10 group-hover:inset-0 transition-all duration-500"></div>
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAge54n6vh86FTPDmcWS5SIbfThEN_giiHpCA5o2ZdD0VQ0GPywCbEDSXivq2GYWZXIVbPAolay7ZrA_ynOcPi5N-FQUAPvMdbPVy_qddrhem3fBQTrdyxSuX-8dshAEE4IHq3s0bqHlREP2ib8_XPvOv7Q6BTNurQfHzVGZ8MVoVXWVFYXi871Etq6K_lXvtrLLtOAZywuKgf2fM5TCYxjjTxoPSX1ZgMYvsG7yW9spUYIE4WVXQFr4P9kTIWNogKzBMB1HlzFqg"
            alt="Modern architecture in Boston"
            width={800}
            height={600}
            className="w-full h-[300px] md:h-[600px] object-cover rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </div>
    </section>
  );
}
