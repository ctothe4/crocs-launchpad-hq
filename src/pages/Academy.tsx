import Reveal from "@/components/Reveal";
import { Btn, GoldRule, PageHero, Pending, Principle, SectionLabel } from "@/components/ca/ui";
import { brand } from "@/lib/site";
import { useSeo } from "@/hooks/useSeo";
import hero from "@/assets/photo/hero.jpg";

const outcomes = [["Think", "With clarity."], ["Serve", "With compassion."], ["Lead", "With confidence."], ["Achieve", "With purpose."]];
const symbols = [
  ["The Shield", "Structure, protection and institutional permanence."],
  ["The Crocodile", "Confidence, resilience and a distinctive Crocs signature."],
  ["The Open Book", "Learning sits at the centre."],
  ["The Laurel", "Achievement, scholarship and earned distinction."],
  ["Est. 2027 + Motto", "The founding year and permanent statement of values."],
];

const Academy = () => {
  useSeo("The Academy", "Crocs Academy is a new institution in Lusaka, built with permanence in mind and founded on Knowledge, Character and Excellence.");
  return (
    <>
      <PageHero label="The Academy" image={hero} title={<>A new institution.<br /><span className="italic text-gold">Built with permanence in mind.</span></>} intro="Crocs Academy exists to develop well-rounded individuals who combine knowledge, strong character and a pursuit of excellence — in the classroom, on the field and in life." />

      <section className="bg-ivory">
        <div className="container py-28 md:py-40 text-center">
          <Reveal><SectionLabel tone="antique" className="justify-center">Our Foundation</SectionLabel></Reveal>
          <Reveal delay={120}><p className="mt-10 font-serif font-light text-forest text-5xl md:text-7xl lg:text-8xl leading-[1.05]">Knowledge.<br />Character.<br /><span className="italic text-croc">Excellence.</span></p></Reveal>
          <Reveal delay={240}><p className="mt-10 max-w-2xl mx-auto text-forest/75 text-lg">Three words that will not change. Every decision the Academy makes — what is taught, how students are coached, how the community behaves — is measured against them.</p></Reveal>
        </div>
      </section>

      <section className="bg-forest text-ivory">
        <div className="container py-28 md:py-36">
          <Reveal><SectionLabel>What students become</SectionLabel></Reveal>
          <Reveal delay={100}><h2 className="mt-8 mb-16 font-serif font-light text-5xl md:text-6xl max-w-3xl">Four outcomes, practised daily.</h2></Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {outcomes.map(([t, l], i) => <Principle key={t} title={t} line={l} dark index={i} />)}
          </div>
          <GoldRule className="mt-24" />
          <Reveal><p className="mt-16 font-serif font-light text-4xl md:text-6xl">Scholars. Athletes. Leaders.</p></Reveal>
        </div>
      </section>

      <section className="bg-parchment/60">
        <div className="container py-28 md:py-36 grid grid-cols-1 lg:grid-cols-12 gap-14">
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
            <Reveal><SectionLabel tone="forest">The Crest</SectionLabel></Reveal>
            <Reveal delay={100}><h2 className="mt-8 font-serif font-light text-forest text-5xl md:text-6xl leading-[1.05]">Every element carries meaning.</h2></Reveal>
            <Reveal delay={200}><img src={brand.crest} alt="The Crocs Academy crest" loading="lazy" className="mt-12 w-full max-w-sm" /></Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 space-y-2">
            {symbols.map(([t, l], i) => (
              <Reveal key={t} delay={i * 80} className="border-t border-forest/20 py-10">
                <div className="label-caps text-antique">0{i + 1}</div>
                <h3 className="mt-3 font-serif text-forest text-3xl md:text-4xl">{t}</h3>
                <p className="mt-3 text-forest/75 text-lg">{l}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="container py-24 md:py-32">
          <Reveal><SectionLabel tone="antique">Coming to this page</SectionLabel></Reveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {["Head's Welcome", "Leadership", "Governance", "Campus", "Our Story"].map((t) => <Pending key={t} title={t} />)}
          </div>
          <div className="mt-20 flex flex-col sm:flex-row gap-3"><Btn to="/visit" variant="light">Plan a Visit</Btn><Btn to="/apply" variant="secondary">Start Your Application</Btn></div>
        </div>
      </section>
    </>
  );
};

export default Academy;
