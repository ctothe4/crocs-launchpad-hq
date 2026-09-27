import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

export const admissionsSteps = [
  { n: "01", title: "Discover", note: "Meet Crocs through our website, social channels and conversations." },
  { n: "02", title: "Understand", note: "Learn about the programme and what we expect of students and families." },
  { n: "03", title: "Apply", note: "A clear application with requirements set out in advance." },
  { n: "04", title: "Assess", note: "A transparent, considered assessment process." },
  { n: "05", title: "Welcome", note: "An offer, followed by thoughtful onboarding." },
];

const AdmissionsSteps = ({ dark }: { dark?: boolean }) => (
  <ol className="grid grid-cols-1 lg:grid-cols-5 gap-0 lg:gap-6">
    {admissionsSteps.map((s, i) => (
      <Reveal key={s.n} delay={i * 100} className={cn("relative flex lg:block gap-6 pb-10 lg:pb-0 pl-0", "lg:border-t lg:pt-8", dark ? "lg:border-gold/40" : "lg:border-forest/25")}>
        <div className="flex flex-col items-center lg:hidden">
          <span className={cn("h-3 w-3 rotate-45 border", dark ? "border-gold" : "border-antique")} />
          {i < admissionsSteps.length - 1 && <span className={cn("flex-1 w-px mt-2", dark ? "bg-gold/30" : "bg-forest/20")} />}
        </div>
        <li className="list-none">
          <div className={cn("font-serif text-4xl lg:text-5xl font-light", dark ? "text-gold" : "text-antique")}>{s.n}</div>
          <div className={cn("mt-3 label-caps", dark ? "text-ivory" : "text-forest")}>{s.title}</div>
          <p className={cn("mt-3 text-[15px]", dark ? "text-ivory/65" : "text-forest/70")}>{s.note}</p>
        </li>
      </Reveal>
    ))}
  </ol>
);

export default AdmissionsSteps;
