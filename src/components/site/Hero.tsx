import crest from "@/assets/crocs-crest.jpg";

const scrollToApply = () => {
  document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full bg-forest overflow-hidden flex items-center"
    >
      {/* Watermark crest */}
      <img
        src={crest}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-1/2 -translate-y-1/2 right-[-6%] md:right-[2%] lg:right-[8%] w-[90vw] max-w-[820px] opacity-[0.07] object-contain"
      />

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/85 to-transparent pointer-events-none" />

      <div className="container relative z-10 pt-28 pb-20">
        <div className="max-w-3xl">
          <span className="inline-block bg-gold text-forest font-display font-extrabold uppercase tracking-spaced text-[11px] sm:text-xs px-3 py-1.5 mb-8" style={{ borderRadius: 2 }}>
            Admissions Open · 2027 Intake
          </span>

          <h1 className="font-display font-extrabold uppercase text-white leading-[0.95] text-5xl sm:text-6xl md:text-7xl lg:text-[88px]">
            A World-Class<br />
            School. <span className="block sm:inline">Built for </span>
            <span className="text-bright">Athletes.</span>
          </h1>

          <p className="mt-7 text-white/85 font-body text-lg sm:text-xl max-w-xl leading-relaxed">
            Academic excellence and elite football development — one and the same. Launching Lusaka, 2026.
          </p>

          <div className="mt-10">
            <button
              onClick={scrollToApply}
              className="bg-gold text-forest font-display font-extrabold uppercase tracking-spaced px-8 py-4 text-base sm:text-lg hover:bg-gold/90 transition-colors"
              style={{ borderRadius: 2 }}
            >
              Join the Waitlist
            </button>
            <p className="mt-4 text-white/55 text-sm font-body">
              Limited places available. Inaugural cohort only.
            </p>
          </div>
        </div>
      </div>

      {/* bottom rule */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
    </section>
  );
};

export default Hero;
