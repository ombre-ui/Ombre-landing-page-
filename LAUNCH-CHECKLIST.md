# Ombre Landing Page — Master Launch Checklist

This is the single source of truth for finishing and launching the Ombre landing page.

The landing page is already structurally built and visually polished. Do not redesign it unless QA identifies a real defect.

---

## A. CAN COMPLETE NOW — independent of the finished product

### Visual and responsive QA
- [ ] Desktop QA
- [ ] Tablet QA
- [ ] Mobile QA
- [ ] Test iPhone/iOS Safari, including autoplay behavior, full-height layouts, footer glass treatment, and image/video cropping
- [ ] Test Firefox
- [ ] Test Samsung Internet
- [ ] Test older supported Chrome versions
- [ ] Verify all image focal points and responsive crops
- [ ] Verify typography, spacing, section transitions, and CTA positioning at all breakpoints
- [ ] Verify hover/focus states
- [ ] Verify FAQ accordion behavior

### Accessibility
- [ ] Keyboard-navigation pass
- [ ] Visible focus-state pass
- [ ] Color-contrast pass
- [ ] Screen-reader pass with VoiceOver or TalkBack
- [ ] Verify meaningful alt text
- [ ] Verify heading hierarchy and landmark structure
- [ ] Verify reduced-motion behavior with prefers-reduced-motion

### Performance and code quality
- [ ] Optimize hero video
- [ ] Verify image optimization and lazy loading
- [ ] Verify font loading
- [ ] Remove unused code/assets
- [ ] Run a production build
- [ ] Fix all build errors and relevant console warnings
- [ ] Run a Lighthouse/performance pass
- [ ] Rename the hero video file to remove accidental duplicate suffixes such as "(1) (1)"
- [ ] Move root-level production assets into the intended public/ or assets/ structure
- [ ] Remove genuinely unused assets/files

### UX and routing
- [ ] Add a custom 404 page
- [ ] Verify all internal anchor links
- [ ] Verify Privacy and Terms routes work
- [ ] Verify Back to top behavior
- [ ] Verify no placeholder #signup, #signin, or temporary URLs remain after final URLs are available

### SEO and structured data
- [ ] Finalize title and meta description
- [ ] Finalize canonical URL
- [ ] Finalize Open Graph metadata
- [ ] Finalize X/Twitter metadata
- [ ] Finalize OG/share image
- [ ] Add/verify favicon and brand icons
- [ ] Verify FAQ structured data matches the final visible FAQ exactly
- [ ] Decide whether a sitemap is needed and generate it when the production domain is known

### Analytics decision
- [ ] Decide whether analytics will be used
- [ ] If analytics is added, document the provider, cookies/storage, and data use in the Privacy Policy
- [ ] If consent is legally/technically required for the chosen analytics/cookies, implement the appropriate consent notice before launch
- [ ] If no analytics is used, remove any unnecessary analytics code

### Copy ownership
- [ ] Claude's final copy is delivered
- [ ] Owner reads and approves every section personally
- [ ] Do not treat AI-generated copy as approved until the owner has reviewed it

---

## B. DEPENDS ON A5/A6 / FINISHED PRODUCT

A5/A6 are internal app-work labels. These items must wait until the relevant product behavior and routes are final.

### Product claims and copy
- [ ] Verify every FAQ answer against the actual product
- [ ] Verify the privacy/security claims in the FAQ
- [ ] Verify the exact Mentor categories named on the landing page
- [ ] Verify the Mentor handoff/context-continuity promise
- [ ] Verify all Vision, Workspace, Benefits, Handoff, and CTA copy that describes product behavior
- [ ] Replace provisional copy with the final owner-approved copy

### App integration
- [ ] Confirm final production signup/get-started URL
- [ ] Confirm final production sign-in URL
- [ ] Update src/config.js with the real SIGNUP_URL
- [ ] Update src/config.js with the real SIGNIN_URL
- [ ] Test every CTA after updating the URLs
- [ ] Test signup → app flow end-to-end
- [ ] Test sign-in → app flow end-to-end
- [ ] Verify the landing page does not depend on unfinished app APIs

### Legal/product accuracy
- [ ] Confirm the actual legal operator (company or person)
- [ ] Add the legal operator's name to Privacy/Terms
- [ ] Add the required contact address
- [ ] Add a named/contact route for privacy/data complaints where required
- [ ] Confirm actual AI providers that process user content
- [ ] Confirm whether/how user content may be used for model training
- [ ] Confirm deletion/account-deletion process
- [ ] Confirm cookies and storage actually used
- [ ] Confirm minimum-age policy and ensure signup enforcement matches it
- [ ] Confirm governing law and courts
- [ ] Have the legal pages professionally reviewed if appropriate before launch

### Under-18 consistency
- [ ] If the legal pages say 18+, make the product signup enforce the same policy
- [ ] If the product supports minors under a legally compliant consent model instead, update the legal pages and signup flow consistently
- [ ] Never leave the legal policy and actual signup behavior contradictory

---

## C. PRODUCTION LAUNCH

### Domain and deployment
- [ ] Choose and configure the official Ombre domain
- [ ] Attach the domain in Vercel
- [ ] Verify HTTPS
- [ ] Verify the production deployment uses the intended production branch
- [ ] Verify environment/configuration values

### Search-engine visibility
Keep the site hidden while it is still in development.

Before public launch:
- [ ] Remove the noindex, nofollow meta tag from index.html
- [ ] Remove the X-Robots-Tag: noindex, nofollow response header from vercel.json
- [ ] Configure robots.txt to allow intended crawling
- [ ] Do not use a robots.txt that blocks crawling if you expect search engines to discover/index the site
- [ ] Add a sitemap if used
- [ ] Submit/verify the site in the chosen search-console tooling if desired

### Official contact and links
- [ ] Replace the Gmail contact address with an official domain email, e.g. hello@yourdomain
- [ ] Update the footer
- [ ] Update Privacy/Terms contact information
- [ ] Add only official social/company links that actually exist
- [ ] Verify every external link

### Share previews
- [ ] Test Open Graph preview
- [ ] Test X/Twitter preview
- [ ] Test LinkedIn preview
- [ ] Test WhatsApp preview
- [ ] Refresh/debug cached previews if old metadata is being shown

### Final browser/device smoke test
- [ ] Production test on desktop Chrome
- [ ] Production test on Firefox
- [ ] Production test on Safari
- [ ] Production test on iPhone/iOS Safari
- [ ] Production test on Android Chrome
- [ ] Production test on Samsung Internet
- [ ] Test all CTAs and legal links
- [ ] Test direct navigation to /privacy, /terms, and invalid routes
- [ ] Check console/network errors in production

### Launch safety
- [ ] Create a Git tag for the approved launch commit
- [ ] Record the Vercel production deployment associated with that tag
- [ ] Confirm rollback path before announcing the site
- [ ] Keep the previous known-good deployment available for rollback

---

## D. FINAL OWNER SIGN-OFF

- [ ] Owner has reviewed the complete page from top to bottom
- [ ] Owner has approved the final copy
- [ ] Owner has approved the final visual presentation
- [ ] Owner has approved the legal/contact information
- [ ] Owner has tested every CTA
- [ ] Owner has tested the signup/sign-in flow
- [ ] Owner has checked mobile and desktop production views
- [ ] Owner has approved the production deployment

---

## Launch rule

Do not call the landing page "complete" until:

1. All independent QA items in Section A are complete.
2. All product-dependent items in Section B are verified after A5/A6.
3. Production items in Section C are complete.
4. The owner signs off in Section D.

The landing page should remain noindex until the production domain, copy, product claims, legal pages, and launch deployment are genuinely ready.
