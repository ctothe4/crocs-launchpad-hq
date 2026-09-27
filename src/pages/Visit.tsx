import Reveal from "@/components/Reveal";
import { PageHero, SectionLabel } from "@/components/ca/ui";
import EnquiryForm from "@/components/ca/EnquiryForm";
import { useSeo } from "@/hooks/useSeo";
import visit from "@/assets/photo/visit.jpg";

const paths = [
  ["Campus Visit", "A personal introduction to the Academy."],
  ["Open Day", "Meet the team and experience Crocs."],
  ["Founders Preview", "An introduction to the Academy before opening."],
  ["Speak with Admissions", "Ask a question before arranging a visit."],
];

const Visit = () => {
  useSeo("Visit Crocs", "Come and see Crocs Academy for yourself. Register interest in a campus visit, open day, founders preview or a conversation with Admissions.");
  return (
    <>
      <PageHero label="Visit" image={visit} title={<>Come and see Crocs <span className="italic text-gold">for yourself.</span></>} intro="For many families, choosing a school begins with seeing it, asking questions and understanding how it feels." />
      <section className="bg-ivory">
        <div className="container py-28 md:py-36">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {paths.map(([t, l], i) => (
              <Reveal key={t} delay={i * 90} className="border-t border-forest/20 pt-6">
                <div className="font-serif text-antique text-lg">0{i + 1}</div>
                <h2 className="mt-3 font-serif text-forest text-3xl">{t}</h2>
                <p className="mt-3 text-forest/75">{l}</p>
                <div className="mt-4 label-caps text-[10px] text-antique">Dates to be announced</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-parchment/60">
        <div className="container py-28 md:py-36 grid grid-cols-1 lg:grid-cols-12 gap-14">
          <div className="lg:col-span-4">
            <Reveal><SectionLabel tone="forest">Register Interest</SectionLabel></Reveal>
            <Reveal delay={100}><h2 className="mt-8 font-serif font-light text-forest text-4xl md:text-5xl">Tell us how you would like to meet the Academy.</h2></Reveal>
            <Reveal delay={200}><p className="mt-6 text-forest/75">Visit dates have not yet been set. Register your interest and the Admissions Team will contact you as soon as they are.</p></Reveal>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <EnquiryForm kind="visit" options={paths.map((p) => p[0])} submitLabel="Register Interest" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Visit;
