import crest from "@/assets/crocs-crest.png";

const Footer = () => {
  return (
    <footer className="bg-ink-deep border-t border-bright">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex items-center gap-4">
            <img src={crest} alt="Crocs Academy crest" className="h-7 w-7 object-contain" />
            <div>
              <div className="font-display font-extrabold uppercase text-white tracking-spaced text-sm">
                Crocs Academy
              </div>
              <div className="text-white/45 font-display font-bold uppercase tracking-wider-2 text-[10px] mt-1">
                Scholar. Athlete. Leader.
              </div>
            </div>
          </div>
          <div className="md:text-right text-white/55 font-body text-sm space-y-1">
            <div>Lusaka, Zambia</div>
            <div className="text-white/35">A Cedar Rock Holdings Initiative</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
