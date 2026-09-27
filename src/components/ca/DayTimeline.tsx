import { useState } from "react";
import { cn } from "@/lib/utils";
import { placeholders } from "@/lib/site";

/** Interactive day timeline. Times are illustrative placeholders (see placeholders.dayTimeline). */
const DayTimeline = () => {
  const items = placeholders.dayTimeline;
  const [active, setActive] = useState(0);
  const cur = items[active];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
      <div className="lg:col-span-5 order-2 lg:order-1">
        <div className="border-l border-forest/20" role="tablist" aria-label="A day at the Academy">
          {items.map((it, i) => (
            <button
              key={it.time}
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              className={cn("relative w-full text-left pl-8 py-4 flex items-baseline gap-6 transition-colors", i === active ? "text-forest" : "text-forest/45 hover:text-forest/75")}
            >
              <span className={cn("absolute left-[-1px] top-0 bottom-0 w-[2px] transition-colors", i === active ? "bg-antique" : "bg-transparent")} />
              <span className="font-serif text-2xl tabular-nums w-20 shrink-0">{it.time}</span>
              <span className="label-caps">{it.title}</span>
            </button>
          ))}
        </div>
        <p className="mt-6 text-xs text-forest/55 label-caps">Illustrative schedule · Times to be confirmed</p>
      </div>
      <div className="lg:col-span-7 order-1 lg:order-2">
        <div className="bg-forest text-ivory p-10 md:p-14 min-h-[320px] flex flex-col justify-between">
          <div className="label-caps text-gold">{cur.time}</div>
          <div key={active} className="animate-in fade-in slide-in-from-bottom-2 duration-700">
            <div className="font-serif font-light text-5xl md:text-7xl">{cur.title}</div>
            <p className="mt-5 text-ivory/75 text-lg max-w-md">{cur.note}</p>
          </div>
          <div className="mt-10 h-px bg-gold/30 relative">
            <div className="absolute inset-y-0 left-0 bg-gold transition-all duration-700" style={{ width: `${((active + 1) / items.length) * 100}%`, height: 1 }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayTimeline;
