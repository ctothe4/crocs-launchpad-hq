import { Btn } from "@/components/ca/ui";
import { useSeo } from "@/hooks/useSeo";

const NotFound = () => {
  useSeo("Page not found", "This page could not be found.");
  return (
    <section className="bg-forest text-ivory min-h-[80vh] flex items-center">
      <div className="container pt-32 pb-20">
        <div className="label-caps text-gold">404</div>
        <h1 className="mt-6 font-serif font-light text-5xl md:text-7xl">This page could not be found.</h1>
        <div className="mt-10"><Btn to="/">Return Home</Btn></div>
      </div>
    </section>
  );
};

export default NotFound;
