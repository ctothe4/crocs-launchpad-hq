import Reveal from "@/components/Reveal";
import { SectionLabel } from "@/components/ca/ui";
import EnquiryForm from "@/components/ca/EnquiryForm";
import { useSeo } from "@/hooks/useSeo";

const Apply = () => {
  useSeo("Apply", "Begin an application to Crocs Academy, Lusaka. Founding Class 2027.");
  return (
    <>
      <section className="bg-forest text-ivory">
        <div className="container pt-40 pb-20 md:pb-24">
          <Reveal><SectionLabel>Founding Class 2027</SectionLabel></Reveal>
          <Reveal delay={100}><h1 className="mt-8 font-serif font-light text-5xl md:text-7xl lg:text-[88px] leading-[1.02]">Apply to Crocs Academy.</h1></Reveal>
          <Reveal delay={200}><p className="mt-8 max-w-xl text-ivory/75 text-lg">Thank you for your interest in Crocs Academy. Share a few details and the Admissions Team will guide you through what happens next.</p></Reveal>
        </div>
      </section>
      <section className="bg-ivory">
        <div className="container py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-14">
          <aside className="lg:col-span-3 space-y-8 text-forest/75">
            <div><div className="label-caps text-antique">Where am I?</div><p className="mt-2">Step 03 · Apply</p></div>
            <div><div className="label-caps text-antique">What happens next?</div><p className="mt-2">The Admissions Team will contact you about assessment and next steps.</p></div>
            <div><div className="label-caps text-antique">Who can I ask?</div><p className="mt-2"><a href="/contact" className="underline underline-offset-4 decoration-antique hover:text-forest">Contact Admissions</a></p></div>
          </aside>
          <div className="lg:col-span-8 lg:col-start-5">
            <EnquiryForm kind="apply" submitLabel="Begin Application" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Apply;
