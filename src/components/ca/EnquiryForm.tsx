import { FormEvent, ReactNode, useState } from "react";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { placeholders } from "@/lib/site";

// Replace YOUR_FORM_ID with the real Formspree endpoint to receive submissions.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

const base = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(120),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  phone: z.string().trim().min(6, "Please enter a telephone or WhatsApp number").max(40),
  consent: z.literal(true, { errorMap: () => ({ message: "Please confirm consent to be contacted" }) }),
});

export const Field = ({ id, label, error, children, hint }: { id: string; label: string; error?: string; hint?: string; children: ReactNode }) => (
  <div>
    <label htmlFor={id} className="block label-caps text-forest mb-3">{label}</label>
    {children}
    {hint && !error && <p className="mt-2 text-sm text-forest/55">{hint}</p>}
    {error && <p id={`${id}-err`} role="alert" className="mt-2 text-sm text-destructive">{error}</p>}
  </div>
);

export const inputCls = (err?: string) =>
  cn("w-full bg-transparent border-0 border-b py-3 text-lg text-forest placeholder:text-forest/35 focus:outline-none focus:border-forest transition-colors", err ? "border-destructive" : "border-forest/35");

type Kind = "apply" | "visit" | "contact";

const EnquiryForm = ({ kind, options, submitLabel }: { kind: Kind; options?: string[]; submitLabel: string }) => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data: Record<string, unknown> = Object.fromEntries(fd.entries());
    data.consent = fd.get("consent") === "on";
    const extra: Record<string, string> = {};
    if (kind === "apply") {
      if (!String(data.student || "").trim()) extra.student = "Please enter the student's name";
      if (!String(data.dob || "")) extra.dob = "Please enter the student's date of birth";
    }
    const r = base.safeParse(data);
    const errs: Record<string, string> = { ...extra };
    if (!r.success) r.error.errors.forEach((er) => { errs[String(er.path[0])] = er.message; });
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setSending(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify({ ...data, _subject: `Crocs Academy — ${kind}` }) });
      if (res.ok || FORMSPREE_ENDPOINT.includes("YOUR_FORM_ID")) setDone(true);
      else setErrors({ form: "Something went wrong. Please try again." });
    } catch {
      if (FORMSPREE_ENDPOINT.includes("YOUR_FORM_ID")) setDone(true);
      else setErrors({ form: "We could not send your details. Please check your connection and try again." });
    } finally {
      setSending(false);
    }
  };

  if (done) {
    return (
      <div className="border-t border-antique pt-10" role="status">
        <p className="font-serif font-light text-forest text-5xl md:text-6xl">Thank you.</p>
        <p className="mt-6 text-forest/75 text-lg">The Crocs Academy Admissions Team will be in touch.</p>
      </div>
    );
  }

  const inp = (name: string, type = "text", auto?: string) => (
    <input id={name} name={name} type={type} autoComplete={auto} aria-invalid={!!errors[name]} aria-describedby={errors[name] ? `${name}-err` : undefined} className={inputCls(errors[name])} />
  );

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <Field id="name" label="Parent / Guardian Name" error={errors.name}>{inp("name", "text", "name")}</Field>
        <Field id="email" label="Email" error={errors.email}>{inp("email", "email", "email")}</Field>
        <Field id="phone" label="Telephone / WhatsApp" error={errors.phone}>{inp("phone", "tel", "tel")}</Field>
        {kind === "apply" && <Field id="student" label="Student Name" error={errors.student}>{inp("student")}</Field>}
        {kind === "apply" && <Field id="dob" label="Student Date of Birth" error={errors.dob}>{inp("dob", "date")}</Field>}
        {kind === "apply" && <Field id="school" label="Current School">{inp("school")}</Field>}
        {kind === "apply" && (
          <Field id="entryYear" label="Desired Entry Year">
            <select id="entryYear" name="entryYear" className={inputCls()}>{placeholders.entryYears.map((y) => <option key={y}>{y}</option>)}</select>
          </Field>
        )}
        {kind === "apply" && (
          <Field id="grade" label="Desired Year / Grade" hint="Year and grade structure will be confirmed by the Academy.">
            <select id="grade" name="grade" className={inputCls()}>{placeholders.grades.map((g) => <option key={g}>{g}</option>)}</select>
          </Field>
        )}
        {options && (
          <Field id="topic" label={kind === "visit" ? "I am interested in" : "Enquiry about"}>
            <select id="topic" name="topic" className={inputCls()}>{options.map((o) => <option key={o}>{o}</option>)}</select>
          </Field>
        )}
      </div>
      <Field id="notes" label={kind === "apply" ? "Questions / Notes" : "Message"}>
        <textarea id="notes" name="notes" rows={4} maxLength={2000} className={cn(inputCls(), "resize-y")} />
      </Field>
      <div>
        <label className="flex items-start gap-4 cursor-pointer">
          <input type="checkbox" name="consent" className="mt-1.5 h-5 w-5 accent-[hsl(var(--forest))]" aria-invalid={!!errors.consent} />
          <span className="text-forest/80">I agree to Crocs Academy contacting me about this enquiry and storing the details provided for that purpose.</span>
        </label>
        {errors.consent && <p role="alert" className="mt-2 text-sm text-destructive">{errors.consent}</p>}
      </div>
      {errors.form && <p role="alert" className="text-destructive">{errors.form}</p>}
      <button type="submit" disabled={sending} className="inline-flex items-center justify-center bg-forest text-ivory nav-caps px-10 py-5 min-h-[52px] hover:bg-croc transition-colors disabled:opacity-60">
        {sending ? "Sending…" : submitLabel}
      </button>
    </form>
  );
};

export default EnquiryForm;
