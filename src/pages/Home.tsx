import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";
import { Btn, CinematicImage, GoldRule, SectionLabel, TextLink } from "@/components/ca/ui";
import AdmissionsSteps from "@/components/ca/AdmissionsSteps";
import DayTimeline from "@/components/ca/DayTimeline";
import { brand } from "@/lib/site";
import { useSeo } from "@/hooks/useSeo";
import hero from "@/assets/photo/hero.jpg";
import scholars from "@/assets/photo/scholars.jpg";
import athletes from "@/assets/photo/athletes.jpg";
import leaders from "@/assets/photo/leaders.jpg";
import learning from "@/assets/photo/learning.jpg";
import visit from "@/assets/photo/visit.jpg";

const worlds = [
  { title: "Scholars", line: ["Curious minds.", "Strong foundations."], img: scholars, to: "/learning", alt: "A student concentrating while writing" },
  { title: "Athletes", line: ["Discipline, teamwork", "and healthy competition."], img: athletes, to: "/sport-life", alt: "Students competing for the ball on a pitch" },
  { title: "Leaders", line: ["Character in action,", "on campus and beyond."], img: leaders, to: "/character-leadership", alt: "A teacher in discussion with two students" },
];

const standard = [
  ["Curiosity", "Ask better questions."],
  ["Preparation", "Arrive ready."],
  ["Effort", "Do the work properly."],
  ["Respect", "How we treat people matters."],
  ["Responsibility", "Own your choices."],
  ["Service", "Contribute beyond yourself."],
];

const Home = () => {
  useSeo("", "Crocs Academy is a new school in Lusaka, Zambia, founded on Knowledge, Character and Excellence. Founding Class 2027.");

  return (
    <>
      {/* 01 HERO */}
      <section className="relative min-h-[100svh] bg-forest text-ivory overflow-hidden flex items-end">
        <img src={hero} alt="Students walking across an open field in warm evening light" data-placeholder="illustrative" fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-[70%_center]" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest/95 via-forest/60 to-forest/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-transparent to-forest/40" />
        <div className="container relative pb-16 md:pb-24 pt-40">
          <h1 className="font-serif font-light leading-[0.98] text-[15vw] sm:text-7xl md:text-8xl lg:text-[110px]">
            {["Knowledge.", "Character.", "Excellence."].map((w, i) => (
              <span key={w} className="block hero-word" style={{ animationDelay: `${200 + i * 350}ms` }}>
                {i === 2 ? <span className="text-gold italic">{w}</span> : w}
              </span>
            ))}
          </h1>
          <div className="hero-word mt-12 grid gap-10 md:grid-cols-12 items-end" style={{ animationDelay: "1400ms" }}>
            <div className="md:col-span-6 flex flex-wrap gap-x-6 gap-y-2 label-caps text-ivory/80 text-[11px]">
              <span>Crocs Academy</span><span className="text-gold">·</span>
              <span>Lusaka, Zambia</span><span className="text-gold">·</span>
              <span>Est. 2027</span><span className="text-gold">·</span>
              <span>Founding Class 2027</span>
            </div>
            <div className="md:col-span-6 flex flex-col sm:flex-row gap-3 md:justify-end">
              <Btn to="/the-academy">Discover Crocs</Btn>
              <Btn to="/apply" variant="outline-light">Apply for 2027</Btn>
            </div>
          </div>
        </div>
      </section>

      {/* 02 BRAND PROMISE */}
      <section className="bg-ivory">
        <div className="container py-28 md:py-40 grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-8 items-center">
          <div className="lg:col-span-6">
            <Reveal><SectionLabel tone="antique">The Academy</SectionLabel></Reveal>
            <Reveal delay={100}>
              <h2 className="mt-8 font-serif font-light text-forest text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
                More than a school.<br /><span className="italic text-croc">A launchpad for what is next.</span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-10 max-w-xl space-y-5 text-forest/80 text-lg">
                <p>Crocs Academy exists to develop well-rounded individuals who combine knowledge, strong character and a pursuit of excellence — in the classroom, on the field and in life.</p>
                <p>We are building a community where students discover their potential, are challenged to grow, and are prepared to contribute meaningfully to Zambia and the world.</p>
              </div>
            </Reveal>
            <Reveal delay={300}><div className="mt-10"><TextLink to="/the-academy">Discover the Academy</TextLink></div></Reveal>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <CinematicImage src={leaders} alt="A teacher mentoring students outdoors" className="aspect-[4/5]" />
          </div>
        </div>
      </section>

      {/* 03 SCHOLARS ATHLETES LEADERS */}
      <section className="bg-parchment/60">
        <div className="container pt-28 md:pt-36 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <Reveal className="lg:col-span-7">
              <h2 className="font-serif font-light text-forest text-5xl md:text-7xl leading-[1.02]">Scholars.<br />Athletes.<br />Leaders.</h2>
            </Reveal>
            <Reveal delay={150} className="lg:col-span-4 lg:col-start-9">
              <p className="text-forest/80 text-lg">A school culture designed to develop the whole person — with equal respect for the classroom, the field and the choices made every day.</p>
            </Reveal>
          </div>
        </div>
        <div className="container pb-28 md:pb-36">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {worlds.map((w, i) => (
              <Reveal key={w.title} delay={i * 140}>
                <Link to={w.to} className="group relative block overflow-hidden aspect-[4/5] md:aspect-[3/5] bg-forest">
                  <img src={w.img} alt={w.alt} loading="lazy" data-placeholder="illustrative" className="absolute inset-0 h-full w-full object-cover opacity-85 transition-all duration-[1400ms] ease-out group-hover:scale-[1.03] group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 text-ivory">
                    <div className="h-px bg-gold w-10 transition-all duration-700 group-hover:w-24" />
                    <h3 className="mt-6 font-serif text-4xl md:text-5xl">{w.title}</h3>
                    <p className="mt-3 text-ivory/80">{w.line[0]}<br />{w.line[1]}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 04 CROCS STANDARD */}
      <section className="bg-forest text-ivory relative overflow-hidden">
        <img src={brand.crest} alt="" aria-hidden className="absolute -right-40 top-1/2 -translate-y-1/2 w-[640px] opacity-[0.04] pointer-events-none" />
        <div className="container py-28 md:py-40 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <Reveal><SectionLabel>The Crocs Standard</SectionLabel></Reveal>
              <Reveal delay={100}><h2 className="mt-8 font-serif font-light text-5xl md:text-6xl leading-[1.05]">What we expect here matters.</h2></Reveal>
              <Reveal delay={200}>
                <p className="mt-8 text-ivory/75 text-lg max-w-md">Knowledge is not enough on its own. At Crocs Academy, how students learn, compete, contribute and treat others matters too.</p>
              </Reveal>
            </div>
            <ol className="lg:col-span-6 lg:col-start-7">
              {standard.map(([t, l], i) => (
                <Reveal key={t} delay={i * 70}>
                  <li className="grid grid-cols-12 items-baseline gap-4 py-6 border-t border-ivory/12 group">
                    <span className="col-span-2 font-serif text-gold/70 text-lg tabular-nums">0{i + 1}</span>
                    <span className="col-span-10 sm:col-span-4 label-caps text-gold">{t}</span>
                    <span className="col-span-10 col-start-3 sm:col-span-6 font-serif text-2xl md:text-[26px] text-ivory">{l}</span>
                  </li>
                </Reveal>
              ))}
              <li className="border-t border-ivory/12 pt-5 text-xs text-ivory/45">Founding principles. The formal student code will be published by the Academy.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* 05 LEARNING */}
      <section className="bg-ivory">
        <CinematicImage src={learning} alt="Students studying together around a table" className="h-[55vh] md:h-[80vh]" />
        <div className="container py-24 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <Reveal><SectionLabel tone="antique">Knowledge</SectionLabel></Reveal>
            <Reveal delay={100}><h2 className="mt-8 font-serif font-light text-forest text-5xl md:text-6xl leading-[1.05]">Knowledge builds capability.</h2></Reveal>
          </div>
          <Reveal delay={200} className="lg:col-span-5 lg:col-start-8 lg:pt-16">
            <p className="text-forest/80 text-lg">Crocs Academy approaches learning with seriousness, curiosity and ambition. Strong foundations matter. So does knowing how to think, question, communicate and apply what has been learned.</p>
            <div className="mt-10"><TextLink to="/learning">Explore Learning</TextLink></div>
          </Reveal>
        </div>
      </section>

      {/* 06 SPORT */}
      <section className="bg-forest text-ivory">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[90vh]">
          <CinematicImage src={athletes} alt="Footballers competing in golden light" className="min-h-[60vh] lg:min-h-full" />
          <div className="flex items-center">
            <div className="px-6 md:px-16 lg:px-20 py-24 max-w-2xl">
              <Reveal><SectionLabel>Excellence</SectionLabel></Reveal>
              <Reveal delay={100}><h2 className="mt-8 font-serif font-light text-5xl md:text-7xl leading-[1.02]">Excellence is <span className="italic text-gold">practised.</span></h2></Reveal>
              <Reveal delay={200}>
                <p className="mt-8 text-ivory/75 text-lg">Sport develops discipline, teamwork, resilience and the confidence to compete well. At Crocs Academy, physical development is part of the education — not an afterthought.</p>
                <div className="mt-10"><TextLink to="/sport-life" tone="ivory">Explore Sport &amp; Life</TextLink></div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 07 CHARACTER */}
      <section className="bg-parchment">
        <div className="container py-28 md:py-40 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4">
            <CinematicImage src={scholars} alt="A student writing in a notebook" className="aspect-[3/4]" />
          </div>
          <div className="lg:col-span-6 lg:col-start-6">
            <Reveal><SectionLabel tone="forest">Character</SectionLabel></Reveal>
            <Reveal delay={100}><h2 className="mt-8 font-serif font-light text-forest text-5xl md:text-7xl leading-[1.02]">How we treat people matters.</h2></Reveal>
            <Reveal delay={200}>
              <p className="mt-8 text-forest/80 text-lg max-w-xl">Character becomes visible in everyday choices — how students work with others, respond to difficulty, serve their community and carry responsibility.</p>
              <div className="mt-10"><TextLink to="/character-leadership">Character &amp; Leadership</TextLink></div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 08 A DAY */}
      <section className="bg-ivory">
        <div className="container py-28 md:py-36">
          <Reveal><SectionLabel tone="antique">Daily Life</SectionLabel></Reveal>
          <Reveal delay={100}><h2 className="mt-8 mb-16 font-serif font-light text-forest text-5xl md:text-6xl">A day at the Academy.</h2></Reveal>
          <DayTimeline />
        </div>
      </section>

      {/* 09 FOUNDING CLASS */}
      <section className="relative bg-forest text-ivory overflow-hidden">
        <img src={hero} alt="" aria-hidden loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-forest via-forest/80 to-forest" />
        <div className="container relative py-32 md:py-48 text-center">
          <Reveal><div className="label-caps text-gold">Founding Class 2027</div></Reveal>
          <GoldRule className="mx-auto mt-8 w-24" />
          <Reveal delay={150}><h2 className="mt-10 font-serif font-light text-5xl md:text-7xl lg:text-8xl leading-[1.02] max-w-5xl mx-auto">Every institution has a first chapter.</h2></Reveal>
          <Reveal delay={250}>
            <p className="mt-10 text-ivory/75 text-lg max-w-2xl mx-auto">Crocs Academy opens in 2027. The Founding Class will do something no future class can repeat: help establish the traditions, expectations and culture of the Academy from its beginning.</p>
            <p className="mt-6 font-serif italic text-2xl text-gold">Be there at the beginning.</p>
            <div className="mt-12"><TextLink to="/founding-class-2027" tone="ivory">Discover the Founding Class</TextLink></div>
          </Reveal>
        </div>
      </section>

      {/* 10 ADMISSIONS */}
      <section className="bg-ivory">
        <div className="container py-28 md:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
            <div className="lg:col-span-6">
              <Reveal><SectionLabel tone="antique">Admissions</SectionLabel></Reveal>
              <Reveal delay={100}><h2 className="mt-8 font-serif font-light text-forest text-5xl md:text-6xl">A clear path to Crocs.</h2></Reveal>
            </div>
            <Reveal delay={200} className="lg:col-span-5 lg:col-start-8 lg:pt-16">
              <p className="text-forest/80 text-lg">Admissions should feel considered from the first question to the first day.</p>
            </Reveal>
          </div>
          <AdmissionsSteps />
          <Reveal className="mt-16 flex flex-col sm:flex-row gap-3">
            <Btn to="/apply" variant="light">Start Your Application</Btn>
            <Btn to="/admissions" variant="secondary">Understand Admissions</Btn>
          </Reveal>
        </div>
      </section>

      {/* 11 VISIT */}
      <section className="relative bg-forest text-ivory min-h-[85vh] flex items-end overflow-hidden">
        <img src={visit} alt="Families walking along a tree-lined path" loading="lazy" data-placeholder="illustrative" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/50 to-transparent" />
        <div className="container relative pb-20 md:pb-28 pt-40">
          <div className="max-w-2xl">
            <Reveal><SectionLabel>Visit</SectionLabel></Reveal>
            <Reveal delay={100}><h2 className="mt-8 font-serif font-light text-5xl md:text-7xl leading-[1.02]">Come and meet the Academy.</h2></Reveal>
            <Reveal delay={200}>
              <p className="mt-8 text-ivory/85 text-lg">For many families, choosing a school begins with seeing it, asking questions and understanding how it feels.</p>
              <div className="mt-10"><TextLink to="/visit" tone="ivory">Plan a Visit</TextLink></div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 12 CLOSING */}
      <section className="bg-forest text-ivory min-h-[100svh] flex items-center">
        <div className="container py-32 text-center">
          <Reveal><img src={brand.crest} alt="Crocs Academy crest" loading="lazy" className="h-28 md:h-32 w-auto mx-auto" /></Reveal>
          <Reveal delay={150}>
            <p className="mt-14 font-serif font-light text-5xl md:text-7xl lg:text-8xl leading-[1.05]">Knowledge.<br />Character.<br /><span className="italic text-gold">Excellence.</span></p>
          </Reveal>
          <GoldRule className="mx-auto mt-14 w-24" />
          <Reveal delay={250}>
            <p className="mt-10 label-caps text-ivory/85">Scholars · Athletes · Leaders</p>
            <p className="mt-4 label-caps text-ivory/45 text-[10px]">Crocs Academy · Lusaka, Zambia · Est. 2027</p>
            <div className="mt-14"><Btn to="/apply">Begin Your Application</Btn></div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Home;
