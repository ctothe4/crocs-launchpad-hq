import { Link } from "react-router-dom";
import { brand, primaryNav } from "@/lib/site";

const col = "label-caps text-gold mb-6";
const lnk = "block py-1.5 text-ivory/75 hover:text-ivory transition-colors text-[15px]";

const Footer = () => (
  <footer className="bg-forest-deep text-ivory">
    <div className="container pt-20 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <img src={brand.reverseLogo} alt="Crocs Academy — Lusaka, Zambia" loading="lazy" className="h-44 w-auto" />
          <p className="mt-8 font-serif text-2xl text-ivory/90">Knowledge. Character. Excellence.</p>
          <p className="mt-3 text-ivory/55 text-sm">Lusaka, Zambia · Est. 2027</p>
        </div>
        <nav aria-label="Footer primary" className="md:col-span-3">
          <div className={col}>The Academy</div>
          {primaryNav.map((n) => <Link key={n.to} to={n.to} className={lnk}>{n.label}</Link>)}
        </nav>
        <nav aria-label="Footer actions" className="md:col-span-2">
          <div className={col}>Actions</div>
          <Link to="/visit" className={lnk}>Visit Crocs</Link>
          <Link to="/apply" className={lnk}>Apply</Link>
          <Link to="/contact" className={lnk}>Contact</Link>
        </nav>
        <div className="md:col-span-3">
          <div className={col}>Information</div>
          {["Policies", "Careers", "Parent Information", "School Calendar"].map((u) => (
            <span key={u} className="block py-1.5 text-ivory/40 text-[15px]">{u} <span className="text-[10px] label-caps text-gold/50 ml-1">Soon</span></span>
          ))}
        </div>
      </div>
      <div className="mt-20 h-px bg-gold/25" />
      <div className="mt-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-ivory/45">
        <span>© {new Date().getFullYear()} Crocs Academy. All rights reserved.</span>
        <span>Scholars · Athletes · Leaders</span>
      </div>
    </div>
  </footer>
);

export default Footer;
