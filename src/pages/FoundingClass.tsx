import Reveal from "@/components/Reveal";
import { Btn, CinematicImage, GoldRule, Principle } from "@/components/ca/ui";
import { brand } from "@/lib/site";
import { useSeo } from "@/hooks/useSeo";
import hero from "@/assets/photo/hero.jpg";
import leaders from "@/assets/photo/leaders.jpg";

const themes = [
  ["Contribution", "Helping to shape the Academy, not only attend it."],
  ["Belonging", "Being part of something from the very first day."],
  ["Responsibility", "Setting the example that later classes will follow."],
  ["First Traditions", "The habits and rituals that begin here will last."],
  ["Shared Standards", "Establishing, together, what Crocs expects of itself."],
  ["Institutional Memory", "Becoming part of the Academy's permanent story."],
];

const FoundingClass = () => {
  useSeo("Founding Class 2027", "Crocs Academy opens in 2027. The Founding Class will help establish the traditions, expectations and culture of the Academy from its beginning.");
  return (
    <>
      <section className="relative bg-forest text-ivory min-h-[100svh] flex items-center overflow-hidden">
        <img src={hero} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/70 via-forest/85 to-forest" />
        <div className="container relative pt-36 pb-24 text-center">
          <Reveal><img src={brand.crest} alt="Crocs Academy crest" className="h-24 w-auto mx-auto" /></Reveal>
          <h1 className="mt-12 font-serif font-light leading-[0.95]">
            <span className="block hero-word label-caps text-gold !text-sm md:!text-base tracking-[0.4em]" style={{ animationDelay: "200ms" }}>Founding Class</span>
            <span className="block hero-word text-[28vw] md:text-[220px] lg:text-[260px] mt-4" style={{ animationDelay: "500ms" }}>2027</span>
          </h1>
          <GoldRule className="mx-auto w-24 mt-6" />
          <Reveal delay={400}><p className="mt-10 font-serif italic text-3xl md:text-5xl text-ivory/90">Every institution has a first chapter.</p></Reveal>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="container py-28 md:py-40 grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-6">
            <Reveal><p className="font-serif font-light text-forest text-4xl md:text-5xl leading-[1.15]">Crocs Academy opens in 2027. The Founding Class will do something no future class can repeat: help establish the traditions, expectations and culture of the Academy from its beginning.</p></Reveal>
          </div>
          <div className="lg:col-span-5 lg:col-start-8"><CinematicImage src={leaders} alt="A teacher and students in discussion" className="aspect-[4/5]" /></div>
        </div>
      </section>

      <section className="bg-forest text-ivory">
        <div className="container py-28 md:py-36">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {themes.map(([t, l], i) => <Principle key={t} title={t} line={l} dark index={i} />)}
          </div>
        </div>
      </section>

      <section className="bg-parchment">
        <div className="container py-32 md:py-44 text-center">
          <Reveal><p className="font-serif font-light italic text-forest text-4xl md:text-6xl max-w-4xl mx-auto leading-[1.15]">Years from now, there will only ever be one Founding Class.</p></Reveal>
          <Reveal delay={200}><div className="mt-14 flex flex-col sm:flex-row gap-3 justify-center"><Btn to="/apply" variant="light">Become Part of the Founding Class</Btn><Btn to="/visit" variant="secondary">Plan a Visit</Btn></div></Reveal>
        </div>
      </section>
    </>
  );
};

export default FoundingClass;
