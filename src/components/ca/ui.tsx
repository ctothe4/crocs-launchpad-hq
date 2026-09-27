import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Reveal from "@/components/Reveal";

export const SectionLabel = ({ children, tone = "gold", className }: { children: ReactNode; tone?: "gold" | "forest" | "antique"; className?: string }) => (
  <div className={cn("flex items-center gap-4 label-caps", tone === "gold" && "text-gold", tone === "antique" && "text-antique", tone === "forest" && "text-forest", className)}>
    <span className={cn("h-px w-10", tone === "forest" ? "bg-forest" : tone === "antique" ? "bg-antique" : "bg-gold")} aria-hidden />
    {children}
  </div>
);

export const GoldRule = ({ className }: { className?: string }) => (
  <Reveal className={className}><div className="rule-draw h-px w-full bg-gold/70" aria-hidden /></Reveal>
);

type BtnProps = { to: string; children: ReactNode; variant?: "primary" | "secondary" | "light" | "outline-light"; className?: string };
export const Btn = ({ to, children, variant = "primary", className }: BtnProps) => (
  <Link
    to={to}
    className={cn(
      "group inline-flex items-center justify-center gap-3 px-7 py-4 nav-caps transition-colors duration-300 min-h-[48px]",
      variant === "primary" && "bg-gold text-forest hover:bg-parchment",
      variant === "secondary" && "border border-forest text-forest hover:bg-forest hover:text-ivory",
      variant === "light" && "bg-forest text-ivory hover:bg-croc",
      variant === "outline-light" && "border border-ivory/40 text-ivory hover:border-gold hover:text-gold",
      className,
    )}
  >
    {children}
  </Link>
);

export const TextLink = ({ to, children, tone = "forest", className }: { to: string; children: ReactNode; tone?: "forest" | "ivory"; className?: string }) => (
  <Link to={to} className={cn("group inline-flex items-center gap-3 nav-caps pb-2 border-b transition-colors", tone === "forest" ? "text-forest border-antique/60 hover:border-forest" : "text-ivory border-gold/60 hover:border-gold hover:text-gold", className)}>
    {children}
    <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" aria-hidden />
  </Link>
);

/** Photograph with masked reveal. Images marked data-placeholder are illustrative and must be replaced with real Crocs Academy photography. */
export const CinematicImage = ({ src, alt, className, imgClassName, eager }: { src: string; alt: string; className?: string; imgClassName?: string; eager?: boolean }) => (
  <Reveal className={cn("overflow-hidden", className)}>
    <div className="img-mask h-full w-full">
      <img src={src} alt={alt} data-placeholder="illustrative" loading={eager ? "eager" : "lazy"} className={cn("h-full w-full object-cover", imgClassName)} />
    </div>
  </Reveal>
);

/** Elegant holding state for information not yet confirmed by the Academy. */
export const Pending = ({ title, children, dark }: { title: string; children?: ReactNode; dark?: boolean }) => (
  <div className={cn("border-t pt-6", dark ? "border-gold/40" : "border-forest/20")}>
    <h3 className={cn("font-serif text-2xl md:text-3xl", dark ? "text-ivory" : "text-forest")}>{title}</h3>
    <p className={cn("mt-3 text-base", dark ? "text-ivory/65" : "text-forest/65")}>{children ?? "Details will be published here once confirmed by the Academy."}</p>
    <div className={cn("mt-4 label-caps text-[10px]", dark ? "text-gold" : "text-antique")}>To be confirmed</div>
  </div>
);

export const PageHero = ({ label, title, intro, image, children }: { label: string; title: ReactNode; intro?: ReactNode; image?: string; children?: ReactNode }) => (
  <section className="relative bg-forest text-ivory overflow-hidden min-h-[78vh] flex items-end">
    {image && (
      <>
        <img src={image} alt="" aria-hidden data-placeholder="illustrative" className="absolute inset-0 h-full w-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/70 to-forest/30" />
      </>
    )}
    <div className="container relative pt-40 pb-20 md:pb-28">
      <Reveal><SectionLabel>{label}</SectionLabel></Reveal>
      <Reveal delay={120}>
        <h1 className="mt-8 font-serif font-light text-5xl sm:text-6xl md:text-7xl lg:text-[96px] leading-[1.02] max-w-5xl">{title}</h1>
      </Reveal>
      {intro && <Reveal delay={240}><p className="mt-8 max-w-2xl text-lg md:text-xl text-ivory/80">{intro}</p></Reveal>}
      {children}
    </div>
  </section>
);

export const Principle = ({ title, line, dark, index }: { title: string; line: string; dark?: boolean; index?: number }) => (
  <Reveal delay={(index ?? 0) * 80} className={cn("border-t pt-6", dark ? "border-gold/35" : "border-forest/20")}>
    <div className={cn("label-caps", dark ? "text-gold" : "text-antique")}>{title}</div>
    <p className={cn("mt-3 font-serif text-2xl md:text-[28px] leading-snug", dark ? "text-ivory" : "text-forest")}>{line}</p>
  </Reveal>
);
