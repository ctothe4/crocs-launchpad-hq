import Reveal from "@/components/Reveal";
import { Pending, SectionLabel } from "@/components/ca/ui";
import EnquiryForm from "@/components/ca/EnquiryForm";
import { useSeo } from "@/hooks/useSeo";

const Contact = () => {
  useSeo("Contact", "Talk to Crocs Academy — admissions, visits and general enquiries. Lusaka, Zambia.");
  return (
    <>
      <section className="bg-forest text-ivory">
        <div className="container pt-40 pb-20">
          <Reveal><SectionLabel>Contact</SectionLabel></Reveal>
          <Reveal delay={100}><h1 className="mt-8 font-serif font-light text-5xl md:text-7xl lg:text-[88px]">Talk to Crocs.</h1></Reveal>
        </div>
      </section>
      <section className="bg-ivory">
        <div className="container py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-14">
          <div className="lg:col-span-4 space-y-10">
            <Pending title="Location">Lusaka, Zambia. Full address to be published.</Pending>
            <Pending title="Phone / WhatsApp">Number to be published.</Pending>
            <Pending title="Email">Admissions and general addresses to be published.</Pending>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <EnquiryForm kind="contact" options={["Admissions", "General Enquiries", "Visits"]} submitLabel="Send Message" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
