import Reveal from "@/components/Reveal";

const scrollToApply = () => {
  document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
};

const Reserve = () => {
  return (
    <section className="bg-ink">
      <div className="container py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <div className="text-gold font-display font-extrabold uppercase tracking-spaced text-xs sm:text-sm">
              Secure Your Child's Place
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-6 font-display font-extrabold uppercase text-white leading-[0.95] text-4xl sm:text-5xl md:text-6xl tracking-tight">
              Let Them Be Part Of The Founding Class.
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 text-white/85 font-body text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              The inaugural cohort is limited and filling fast. A $100 Registration Fee reserves your child's assessment slot and locks in your place among Crocs Academy's first-ever students.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-10 text-gold font-display font-extrabold uppercase tracking-spaced text-[11px] sm:text-xs flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
              <span>Founding Classes</span>
              <span aria-hidden="true" className="text-gold/60">·</span>
              <span>Assessment Slot Confirmed</span>
              <span aria-hidden="true" className="text-gold/60">·</span>
              <span>Priority Consideration For Enrollment</span>
              <span aria-hidden="true" className="text-gold/60">·</span>
              <span>Limited Places Available</span>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10">
              <button
                onClick={scrollToApply}
                className="bg-gold text-forest font-display font-extrabold uppercase tracking-spaced px-8 py-4 text-base sm:text-lg hover:bg-gold/90 transition-colors"
                style={{ borderRadius: 2 }}
              >
                Reserve Your Spot — $100
              </button>
            </div>
          </Reveal>

          <Reveal delay={360}>
            <p className="mt-6 text-white/45 font-body text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
              $100 Registration fee secures your child's assessment appointment. Full term fees apply upon enrolment.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Reserve;
