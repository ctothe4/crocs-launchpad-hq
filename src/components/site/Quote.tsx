import Reveal from "@/components/Reveal";

const Quote = () => {
  return (
    <section className="bg-gold relative overflow-hidden">
      <div className="container py-24 md:py-32 relative">
        {/* decorative quote mark */}
        <span
          aria-hidden="true"
          className="absolute top-2 left-2 md:top-6 md:left-10 font-display font-extrabold text-forest/10 leading-none select-none pointer-events-none"
          style={{ fontSize: "clamp(180px, 28vw, 380px)" }}
        >
          “
        </span>
        <Reveal className="relative z-10 max-w-4xl mx-auto">
          <p
            className="font-display italic font-bold text-forest uppercase leading-[1.05] text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Even if they never play professional football, they will leave here equipped to win at whatever they choose.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default Quote;
