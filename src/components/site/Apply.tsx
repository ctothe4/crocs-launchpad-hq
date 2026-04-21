import { FormEvent, useState } from "react";
import { z } from "zod";
import Reveal from "@/components/Reveal";
import { toast } from "sonner";

const emailSchema = z
  .string()
  .trim()
  .email({ message: "Please enter a valid email address" })
  .max(255, { message: "Email must be less than 255 characters" });

// Replace YOUR_FORM_ID with your real Formspree endpoint
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

const Apply = () => {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const result = emailSchema.safeParse(email);
    if (!result.success) {
      toast.error(result.error.errors[0].message);
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email: result.data, source: "Crocs Academy Waitlist" }),
      });
      if (res.ok || FORMSPREE_ENDPOINT.includes("YOUR_FORM_ID")) {
        // Allow success state in dev when endpoint is placeholder
        setSubmitted(true);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="apply" className="bg-forest">
      <div className="container py-24 md:py-32">
        <Reveal className="max-w-2xl mx-auto text-center">
          <div className="w-9 h-[3px] bg-bright mx-auto mb-8" />
          <h2 className="font-display font-extrabold uppercase text-white text-5xl sm:text-6xl md:text-7xl leading-[0.95]">
            Get on the List.
          </h2>
          <p className="text-white/55 font-display font-bold uppercase tracking-wider-2 text-xs sm:text-sm mt-5">
            Inaugural Cohort · Limited Places · Be First
          </p>

          <div className="mt-10">
            {submitted ? (
              <p className="text-bright font-display font-extrabold uppercase tracking-spaced text-lg sm:text-xl py-6">
                You're on the list. We'll be in touch.
              </p>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-2 sm:gap-0 max-w-xl mx-auto"
              >
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  maxLength={255}
                  className="flex-1 bg-white text-forest px-5 py-4 font-body text-base focus:outline-none focus:ring-2 focus:ring-gold placeholder:text-forest/40"
                  style={{ borderRadius: 2 }}
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-gold text-forest font-display font-extrabold uppercase tracking-spaced px-7 py-4 text-base hover:bg-gold/90 transition-colors disabled:opacity-60"
                  style={{ borderRadius: 2 }}
                >
                  {submitting ? "Sending…" : "JOIN THE WAITLIST NOW"}
                </button>
              </form>
            )}
            <p className="mt-5 text-white/45 text-sm font-body">
              We'll be in touch with next steps. No spam, ever.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Apply;
