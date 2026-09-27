import ThemePage from "@/components/ca/ThemePage";
import { useSeo } from "@/hooks/useSeo";
import athletes from "@/assets/photo/athletes.jpg";
import hero from "@/assets/photo/hero.jpg";

const SportLife = () => {
  useSeo("Sport & Life", "At Crocs Academy, sport is part of the education — developing discipline, teamwork, resilience and the confidence to compete well.");
  return (
    <ThemePage
      label="Sport & Life"
      heroTitle={<>Excellence is <span className="italic text-gold">practised.</span></>}
      intro="Sport develops discipline, teamwork, resilience and the confidence to compete well. At Crocs Academy, physical development is part of the education — not an afterthought."
      heroImage={athletes}
      statement={<>One Academy. More energy. What students learn on the field — how to train, lose, recover and try again — <span className="italic text-croc">travels with them.</span></>}
      themes={[
        { title: "Discipline", line: "Showing up, training properly and doing the unglamorous work." },
        { title: "Teamwork", line: "Playing for others and trusting them in return." },
        { title: "Healthy Competition", line: "Competing hard, fairly and with respect for opponents." },
        { title: "Resilience", line: "Responding to setbacks with composure and effort." },
        { title: "Physical Confidence", line: "A healthy relationship with movement, fitness and the body." },
        { title: "Belonging", line: "Shared colours, shared effort, shared pride." },
      ]}
      features={[
        { label: "Education", title: "Sport as part of the day.", body: "Physical development sits alongside academic learning, not after it." },
        { label: "Character", title: "Winning well. Losing well.", body: "How students compete is treated as seriously as whether they win." },
        { label: "Community", title: "Life beyond lessons.", body: "Clubs, activities and shared interests give every student a place to contribute." },
      ]}
      image={hero}
      imageAlt="Students walking together across an open field"
      pendingLabel="Sport & Student Life"
      pending={["Sports", "Clubs", "Activities", "Fixtures", "Results", "Houses / Teams"]}
      cta={{ to: "/visit", label: "Plan a Visit" }}
    />
  );
};

export default SportLife;
