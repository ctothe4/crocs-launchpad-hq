import ThemePage from "@/components/ca/ThemePage";
import { useSeo } from "@/hooks/useSeo";
import leaders from "@/assets/photo/leaders.jpg";
import visit from "@/assets/photo/visit.jpg";

const Character = () => {
  useSeo("Character & Leadership", "At Crocs Academy, character gives knowledge direction. Integrity, service, mentorship, responsibility and respect shape everyday life.");
  return (
    <ThemePage
      label="Character & Leadership"
      heroTitle={<>Character gives knowledge <span className="italic text-gold">direction.</span></>}
      intro="How we treat people matters."
      heroImage={leaders}
      statement={<>Character becomes visible in everyday choices — how students work with others, respond to difficulty, serve their community and <span className="italic text-croc">carry responsibility.</span></>}
      themes={[
        { title: "Integrity", line: "Doing what is right, including when it is inconvenient." },
        { title: "Service", line: "Contributing to others without needing recognition." },
        { title: "Mentorship", line: "Older students and adults guiding those who follow." },
        { title: "Responsibility", line: "Owning choices and their consequences." },
        { title: "Leadership", line: "Setting the standard before being asked to." },
        { title: "Respect", line: "For peers, teachers, opponents and the wider community." },
      ]}
      features={[
        { label: "Character", title: "What happens when no one is awarding marks.", body: "The small, unobserved decisions that show who a person is becoming." },
        { label: "Service", title: "Learning to contribute.", body: "Students learn that their abilities carry obligations to the people around them." },
        { label: "Leadership", title: "Responsibility before title.", body: "Leadership is practised in ordinary moments long before it is given a name." },
        { label: "Community", title: "Belonging carries obligations.", body: "Being part of Crocs means helping to make it a place worth belonging to." },
      ]}
      image={visit}
      imageAlt="Families walking together along a path"
      pendingLabel="Coming to this page"
      pending={["Pastoral Care", "Mentoring Programme", "Service & Community"]}
      cta={{ to: "/founding-class-2027", label: "Founding Class 2027" }}
    />
  );
};

export default Character;
