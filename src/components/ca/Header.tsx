import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { brand, primaryNav } from "@/lib/site";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] bg-gold text-forest px-4 py-2 nav-caps">Skip to content</a>
      <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-500", scrolled || open ? "bg-forest/95 backdrop-blur-sm border-b border-gold/15" : "bg-transparent")}>
        <div className={cn("container flex items-center justify-between transition-all duration-500", scrolled ? "h-[72px]" : "h-[92px]")}>
          <Link to="/" aria-label="Crocs Academy — home" className="flex items-center gap-4 shrink-0">
            <img src={brand.crest} alt="Crocs Academy crest" className={cn("w-auto transition-all duration-500", scrolled ? "h-11" : "h-14")} />
            <span className="hidden sm:block xl:hidden 2xl:block border-l border-gold/40 pl-4 leading-tight">
              <span className="block label-caps text-ivory text-[11px]">Crocs Academy</span>
              <span className="block label-caps text-gold/80 text-[9px] mt-1">Lusaka · Est. 2027</span>
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden xl:flex items-center gap-5 2xl:gap-7">
            {primaryNav.map((n) => (
              <NavLink key={n.to} to={n.to} className={({ isActive }) => cn("nav-caps text-[11px] whitespace-nowrap py-2 border-b transition-colors", isActive ? "text-gold border-gold" : "text-ivory/85 border-transparent hover:text-ivory hover:border-gold/60")}>
                {n.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link to="/visit" className="hidden md:inline-flex whitespace-nowrap nav-caps text-[11px] text-ivory border border-ivory/35 px-4 py-3 hover:border-gold hover:text-gold transition-colors">Visit Crocs</Link>
            <Link to="/apply" className="nav-caps text-[11px] bg-gold text-forest px-5 py-3 hover:bg-parchment transition-colors">Apply</Link>
            <button onClick={() => setOpen((o) => !o)} className="xl:hidden p-3 text-ivory" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen menu */}
      <div className={cn("fixed inset-0 z-40 bg-forest text-ivory transition-opacity duration-500 xl:hidden", open ? "opacity-100" : "opacity-0 pointer-events-none")} aria-hidden={!open}>
        <div className="container h-full flex flex-col pt-32 pb-10 overflow-y-auto">
          <nav aria-label="Mobile" className="flex flex-col">
            {primaryNav.map((n, i) => (
              <NavLink key={n.to} to={n.to} tabIndex={open ? 0 : -1} className="font-serif text-3xl sm:text-4xl py-4 border-b border-ivory/10 hover:text-gold transition-colors" style={{ transitionDelay: `${i * 40}ms` }}>
                {n.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link to="/apply" tabIndex={open ? 0 : -1} className="nav-caps bg-gold text-forest px-6 py-4 text-center">Apply</Link>
            <Link to="/visit" tabIndex={open ? 0 : -1} className="nav-caps border border-ivory/35 px-6 py-4 text-center">Visit Crocs</Link>
            <Link to="/contact" tabIndex={open ? 0 : -1} className="nav-caps border border-ivory/35 px-6 py-4 text-center">Contact</Link>
          </div>
          <div className="mt-auto pt-12 label-caps text-gold/80">Knowledge · Character · Excellence</div>
        </div>
      </div>
    </>
  );
};

export default Header;
