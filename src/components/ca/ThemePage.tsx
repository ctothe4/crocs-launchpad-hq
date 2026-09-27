import { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import { Btn, CinematicImage, PageHero, Pending, SectionLabel } from "@/components/ca/ui";

type Theme = { title: string; line: string };
type Feature = { label: string; title: string; body: string };

/** Shared editorial template for Learning, Sport & Life and Character & Leadership. */
const ThemePage = ({
  label, heroTitle, intro, heroImage, statement, themes, features, image, imageAlt, pendingLabel, pending, cta,
}: {
  label: string; heroTitle: ReactNode; intro: string; heroImage: string; statement: ReactNode;
  themes: Theme[]; features?: Feature[]; image: string; imageAlt: string; pendingLabel: string; pending: string[]; cta: { to: string; label: string };
}) => (
  <>
    <PageHero label={label} title={heroTitle} intro={intro} image={heroImage} />

    <section className="bg-ivory">
      <div className="container py-28 md:py-36 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <Reveal className="lg:col-span-7"><p className="font-serif font-light text-forest text-4xl md:text-5xl leading-[1.15]">{statement}</p></Reveal>
      </div>
      <div className="container pb-28 md:pb-36">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
          {themes.map((t, i) => (
            <Reveal key={t.title} delay={(i % 3) * 90} className="border-t border-forest/20 pt-6">
              <div className="flex items-baseline gap-4"><span className="font-serif text-antique text-lg">0{i + 1}</span><h3 className="label-caps text-forest">{t.title}</h3></div>
              <p className="mt-4 text-forest/75 text-lg">{t.line}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <CinematicImage src={image} alt={imageAlt} className="h-[50vh] md:h-[75vh]" />

    {features && (
      <section className="bg-forest text-ivory">
        <div className="container py-28 md:py-36 space-y-0">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={80} className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-12 border-t border-ivory/12">
              <div className="lg:col-span-3 label-caps text-gold">{f.label}</div>
              <h3 className="lg:col-span-4 font-serif font-light text-3xl md:text-4xl">{f.title}</h3>
              <p className="lg:col-span-5 text-ivory/75 text-lg">{f.body}</p>
              <span className="sr-only">{i}</span>
            </Reveal>
          ))}
        </div>
      </section>
    )}

    <section className="bg-parchment/60">
      <div className="container py-24 md:py-32">
        <Reveal><SectionLabel tone="forest">{pendingLabel}</SectionLabel></Reveal>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {pending.map((p) => <Pending key={p} title={p} />)}
        </div>
        <div className="mt-20 flex flex-col sm:flex-row gap-3">
          <Btn to={cta.to} variant="light">{cta.label}</Btn>
          <Btn to="/apply" variant="secondary">Start Your Application</Btn>
        </div>
      </div>
    </section>
  </>
);

export default ThemePage;
