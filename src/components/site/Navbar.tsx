import crest from "@/assets/crocs-crest.jpg";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-forest/85 backdrop-blur-sm border-b border-white/5">
      <div className="container flex items-center justify-between h-16">
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-3 group"
          aria-label="Crocs Academy home"
        >
          <img src={crest} alt="Crocs Academy crest" className="h-10 w-10 object-contain" />
          <span className="hidden sm:inline font-display font-extrabold tracking-spaced uppercase text-white text-sm">
            Crocs Academy
          </span>
        </button>
        <button
          onClick={() => scrollTo("apply")}
          className="bg-gold text-forest font-display font-extrabold uppercase tracking-spaced text-xs sm:text-sm px-4 sm:px-5 py-2.5 hover:bg-gold/90 transition-colors"
          style={{ borderRadius: 2 }}
        >
          Apply Now
        </button>
      </div>
    </header>
  );
};

export default Navbar;
