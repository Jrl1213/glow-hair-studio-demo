# Glow Hair Studio demo

A one-page fictional salon website built with Next.js, TypeScript, and Tailwind CSS. It needs no database, authentication, or paid API.

## Run locally

1. Install [Node.js](https://nodejs.org/) (version 20 or newer).
2. Open a terminal in this folder and run `npm install`.
3. Run `npm run dev`.
4. Visit [http://localhost:3000](http://localhost:3000).

Use `npm run typecheck` to check TypeScript and `npm run build` to check the production build.

## Edit the demo

Edit `src/config/business.ts` for the business name, category, WhatsApp number and message, services and prices, opening hours, address, photos, and page wording. The `copy` section holds the headings and descriptions; `benefits`, `reviews`, and `faqs` hold the repeated content. **The number `60123456789` is only a placeholder**; replace that one value before using real bookings. Use a Malaysian number with country code `60` and no `+`, spaces, or leading `0`.

To adapt this for a different business category, edit that one config file and replace the demo images. Review every section after changing the content: the one-page layout and warm visual style are still tailored to a service business, so some categories may need a separate design pass.

Replace the files in `public/images/` with your own images. Keep the filenames, or change the paths in `src/config/business.ts`. The supplied images are generated demo imagery and should be replaced for a real business.

Review the written content, FAQs, demo reviews, and SEO text before using this for a real salon. The reviews are explicitly marked fictional. The directions button opens a Google Maps search for the configured address, so add a full address for precise directions.

The demo has a `noindex` robots setting in `src/app/layout.tsx` so fictional business details do not appear in search results. Remove it for a real launch.

## Deploy on Vercel

Push this folder to a Git repository, import it at [vercel.com](https://vercel.com/), and deploy with the default Next.js settings. The demo does not require environment variables.

**Hosting note:** Vercel's free Hobby plan is limited to personal, non-commercial use. A demo used to sell website services may count as commercial use under Vercel's rules. The site itself has no paid dependencies, but check Vercel's current plan rules before using the free plan for sales.
