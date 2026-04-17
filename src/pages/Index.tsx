import { useEffect } from "react";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import ProofPoints from "@/components/site/ProofPoints";
import Quote from "@/components/site/Quote";
import Pillars from "@/components/site/Pillars";
import Apply from "@/components/site/Apply";
import Footer from "@/components/site/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Crocs Academy — A World-Class School. Built for Athletes.";

    const desc =
      "Crocs Academy: a private football academy and Cambridge-aligned school launching in Lusaka, 2026. Apply for the inaugural waitlist.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + "/");
  }, []);

  return (
    <main className="bg-forest">
      <Navbar />
      <Hero />
      <ProofPoints />
      <Quote />
      <Pillars />
      <Apply />
      <Footer />
    </main>
  );
};

export default Index;
