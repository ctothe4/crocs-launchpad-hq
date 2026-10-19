# Crocs Academy — technical rules

- Multi-page site via react-router with a shared `components/ca/Layout` (header + footer) — every public route renders inside it.
- The active official crest lives as a CDN pointer in `src/assets/brand`, exposed only through `brand.crest` in `src/lib/site.ts`; all standalone branding shares it to prevent retired variants returning. Never re-draw or type out the wordmark.
- Unconfirmed facts (timeline, entry years, grades) live in `placeholders` in `src/lib/site.ts` so they can be replaced in one place.
- All enquiry forms (apply, visit, contact) share `components/ca/EnquiryForm` posting to one Formspree endpoint — swap `YOUR_FORM_ID` to go live.
- Photography in `src/assets/photo` is illustrative (`data-placeholder="illustrative"`) and must be replaced with real Academy photos.
