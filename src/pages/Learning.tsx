import ThemePage from "@/components/ca/ThemePage";
import { useSeo } from "@/hooks/useSeo";
import learning from "@/assets/photo/learning.jpg";
import scholars from "@/assets/photo/scholars.jpg";

const Learning = () => {
  useSeo("Learning", "At Crocs Academy, knowledge builds capability: strong foundations, curiosity, disciplined thinking and the ability to apply what is learned.");
  return (
    <ThemePage
      label="Learning"
      heroTitle={<>Knowledge builds <span className="italic text-gold">capability.</span></>}
      intro="Crocs Academy approaches learning with seriousness, curiosity and ambition."
      heroImage={learning}
      statement={<>Strong foundations matter. So does knowing how to think, question, communicate and <span className="italic text-croc">apply</span> what has been learned.</>}
      themes={[
        { title: "Strong Foundations", line: "Secure literacy, numeracy and habits of study that everything else is built on." },
        { title: "Curiosity", line: "Students are encouraged to ask better questions, not only to find answers." },
        { title: "Disciplined Thinking", line: "Reasoning carefully, weighing evidence and reaching considered conclusions." },
        { title: "Communication", line: "Speaking and writing with clarity, confidence and care." },
        { title: "Problem Solving", line: "Approaching difficulty with patience, method and persistence." },
        { title: "Application", line: "Knowledge that can be used — in the classroom, on the field and in life." },
      ]}
      image={scholars}
      imageAlt="A student writing at a desk"
      pendingLabel="Programme Information"
      pending={["Curriculum", "Academic Support", "Libraries & Resources", "Technology", "Enrichment", "Assessment"]}
      cta={{ to: "/admissions", label: "Understand Admissions" }}
    />
  );
};

export default Learning;
