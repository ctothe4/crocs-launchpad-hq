import Reveal from "@/components/Reveal";

const points = [
  { stat: "$1,000", title: "Per Term", sub: "All grades, all phases" },
  { stat: "Grades 1–6", title: "Form 1–4", sub: "A-Levels" },
  { stat: "Pathway-Ready", title: "Every Graduate", sub: "Leaves with the skills and the mindset needed to fully  take on the world" },
];

const ProofPoints = () => {
  return (
    <section className="bg-ink">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {points.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 100}
              className="px-6 py-14 md:py-20 md:px-10 text-center md:text-left"
            >
              <div className="font-display font-extrabold uppercase text-gold text-3xl sm:text-4xl md:text-5xl tracking-tight">
                {p.stat}
              </div>
              <div className="font-display font-extrabold uppercase text-white text-xl sm:text-2xl mt-3 tracking-wide">
                {p.title}
              </div>
              <div className="text-white/55 mt-2 font-body text-sm sm:text-base">
                {p.sub}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofPoints;
