import { useEffect } from "react";

export const useSeo = (title: string, description: string) => {
  useEffect(() => {
    const full = title ? `${title} | Crocs Academy` : "Crocs Academy | Lusaka, Zambia";
    document.title = full;
    const set = (sel: string, attr: string, key: string, val: string) => {
      let el = document.head.querySelector(sel);
      if (!el) {
        el = document.createElement(sel.startsWith("link") ? "link" : "meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute(sel.startsWith("link") ? "href" : "content", val);
    };
    set('meta[name="description"]', "name", "description", description);
    set('meta[property="og:title"]', "property", "og:title", full);
    set('meta[property="og:description"]', "property", "og:description", description);
    set('link[rel="canonical"]', "rel", "canonical", window.location.origin + window.location.pathname);
  }, [title, description]);
};
