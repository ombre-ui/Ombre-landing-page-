# Ombre landing page: launch checklist

The page is built and polished. These are the steps that wait on the
product being finished. Do them roughly in this order.

## 1. Check every claim against the finished product

- FAQ answers (src/components/Faq.jsx), especially "Is my work private?"
- Mentor categories named in the FAQ: business, coding, productivity, health
- The promise that context carries over when you switch Mentors
- Anything in the Vision, Workspace and Handoff copy that describes a feature

## 2. Connect the real links

- Edit src/config.js:
  - SIGNUP_URL (used by every "Explore Ombre" and "Get started" link)
  - SIGNIN_URL (footer "Sign in")

## 3. Make the legal pages accurate

- Read src/legal/privacy.js and src/legal/terms.js. Every line marked
  CONFIRM must match what the product really does:
  - no sale of personal data
  - no training on user content without permission
  - which AI providers process content
  - deletion process
  - cookies
  - minimum age (kept at 18; under-18 users need verifiable parental consent
    under India's DPDP Act)
  - governing law and courts
- Have a lawyer review both pages before real users sign up.

## 4. Domain and share previews

- Attach the custom domain in Vercel.
- In index.html, replace https://ombre-landing-page.vercel.app with the new
  domain in og:url, og:image and twitter:image.

## 5. Small finishing touches

- Add a browser-tab icon (ombre-mark-transparent.png is the ring; a square
  version on a dark background suits a tab icon).
- Optional: a taller Mentor Handoff image for phones, a WebM copy and a 4:5
  phone copy of the hero video.
- Optional: delete the unused ombre-logo-transparent.png from the repo root.

## 6. Let search engines in (currently hidden on purpose)

- Remove the `<meta name="robots" content="noindex, nofollow" />` tag in
  index.html.
- Remove the X-Robots-Tag header from vercel.json.
- Do NOT add a robots.txt that blocks everything: it would stop search
  engines from ever seeing that the page may be indexed.

## 7. Merge into the app repo

- Both projects use Vite and React. Plan the merge (landing page as a route
  or as its own deployment) once the app is ready.
