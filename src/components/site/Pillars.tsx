import Reveal from "@/components/Reveal";

const pillars = [
  {
    title: "Academic Rigour",
    body: "Cambridge-aligned curriculum. Personalised support. Grades 1–12.",
  },
  {
    title: "Elite Coaching",
    body: "Professional staff. UEFA-informed methodology. Daily structured training.",
  },
  {
    title: "Global Pathways",
    body: "University scholarships. Football academies. Documented pipelines to Europe, and beyond.",
  },
];

const Pillars = () => {
  return (
    <section className="bg-offwhite">
      <div className="container py-24 md:py-32">
        <Reveal>
          <div className="text-bright font-display font-extrabold uppercase tracking-wider-2 text-sm mb-10 text-center md:text-left">
            Why Crocs Academy
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <article
                className="bg-forest p-8 md:p-10 h-full border-t-2 border-bright"
                style={{ borderRadius: 2 }}
              >
                <h3 className="font-display font-extrabold uppercase text-gold text-2xl md:text-3xl tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-5 text-white/80 font-body leading-relaxed text-base md:text-lg">
                  {p.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
