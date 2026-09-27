# Crocs Academy — technical rules

- Multi-page site via react-router with a shared `components/ca/Layout` (header + footer) — every public route renders inside it.
- Brand logos live as CDN pointers in `src/assets/brand/*.asset.json`, exposed through `src/lib/site.ts` — never re-draw or type out the wordmark.
- Unconfirmed facts (timeline, entry years, grades) live in `placeholders` in `src/lib/site.ts` so they can be replaced in one place.
- All enquiry forms (apply, visit, contact) share `components/ca/EnquiryForm` posting to one Formspree endpoint — swap `YOUR_FORM_ID` to go live.
- Photography in `src/assets/photo` is illustrative (`data-placeholder="illustrative"`) and must be replaced with real Academy photos.
