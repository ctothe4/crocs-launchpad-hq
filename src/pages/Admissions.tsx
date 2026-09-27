import Reveal from "@/components/Reveal";
import { Btn, PageHero, Pending, SectionLabel } from "@/components/ca/ui";
import AdmissionsSteps from "@/components/ca/AdmissionsSteps";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useSeo } from "@/hooks/useSeo";
import visit from "@/assets/photo/visit.jpg";

const areas = ["Who Can Apply", "Key Dates", "What You Will Need", "Assessment", "Fees"];
const faqs = ["When does the Academy open?", "How do I begin an application?", "Can we visit before applying?"];
const faqAnswers: Record<string, string> = {
  "When does the Academy open?": "Crocs Academy opens in 2027 with its Founding Class. Specific dates will be published once confirmed.",
  "How do I begin an application?": "Start with the application form. The Admissions Team will then be in touch about next steps.",
  "Can we visit before applying?": "Yes. Visit arrangements are being prepared — register your interest on the Visit page and we will contact you.",
};

const Admissions = () => {
  useSeo("Admissions", "Admissions at Crocs Academy: a clear, considered path from first question to first day. Founding Class 2027.");
  return (
    <>
      <PageHero label="Admissions 2027" image={visit} title={<>Your path to <span className="italic text-gold">Crocs.</span></>} intro="Choosing a school is a significant decision. We want the process to be clear from the beginning.">
        <Reveal delay={320}><div className="mt-10 flex flex-col sm:flex-row gap-3"><Btn to="/apply">Start Your Application</Btn><Btn to="/visit" variant="outline-light">Plan a Visit</Btn></div></Reveal>
      </PageHero>

      <section className="bg-ivory">
        <div className="container py-28 md:py-36">
          <Reveal><SectionLabel tone="antique">The Journey</SectionLabel></Reveal>
          <Reveal delay={100}><h2 className="mt-8 mb-16 font-serif font-light text-forest text-5xl md:text-6xl">Five clear steps.</h2></Reveal>
          <AdmissionsSteps />
        </div>
      </section>

      <section className="bg-parchment/60">
        <div className="container py-28 md:py-36 grid grid-cols-1 lg:grid-cols-12 gap-14">
          <div className="lg:col-span-4">
            <Reveal><SectionLabel tone="forest">Admissions 2027</SectionLabel></Reveal>
            <Reveal delay={100}><h2 className="mt-8 font-serif font-light text-forest text-4xl md:text-5xl">What families need to know.</h2></Reveal>
            <Reveal delay={200}><p className="mt-6 text-forest/75">We will publish each of these in full once confirmed. Nothing here will be vague when it matters.</p></Reveal>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 grid grid-cols-1 md:grid-cols-2 gap-10">
            {areas.map((a) => <Pending key={a} title={a} />)}
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="container py-28 md:py-36 grid grid-cols-1 lg:grid-cols-12 gap-14">
          <div className="lg:col-span-4">
            <Reveal><SectionLabel tone="antique">Questions</SectionLabel></Reveal>
            <Reveal delay={100}><h2 className="mt-8 font-serif font-light text-forest text-4xl md:text-5xl">Frequently asked questions.</h2></Reveal>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <Accordion type="single" collapsible className="border-t border-forest/20">
              {faqs.map((q) => (
                <AccordionItem key={q} value={q} className="border-forest/20">
                  <AccordionTrigger className="font-serif text-xl md:text-2xl text-forest text-left py-7 hover:no-underline">{q}</AccordionTrigger>
                  <AccordionContent className="text-forest/75 text-base pb-7">{faqAnswers[q]}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <p className="mt-6 text-xs label-caps text-antique">Further questions will be added as details are confirmed</p>
          </div>
        </div>
      </section>

      <section className="bg-forest text-ivory">
        <div className="container py-24 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-14">
          <Reveal>
            <SectionLabel>Visit the Academy</SectionLabel>
            <p className="mt-6 font-serif text-3xl md:text-4xl">See Crocs for yourself.</p>
            <div className="mt-8"><Btn to="/visit" variant="outline-light">Plan a Visit</Btn></div>
          </Reveal>
          <Reveal delay={120}>
            <SectionLabel>Contact Admissions</SectionLabel>
            <p className="mt-6 font-serif text-3xl md:text-4xl">Ask us anything.</p>
            <div className="mt-8"><Btn to="/contact" variant="outline-light">Talk to Crocs</Btn></div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Admissions;
