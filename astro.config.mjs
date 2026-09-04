// @ts-check
import { defineConfig } from 'astro/config';

// ─── Hosting config ──────────────────────────────────────────────────────────
// `site` is used for canonical URLs, sitemaps and RSS. Set it to your final URL.
//
//   Custom domain              → 'https://aidantruel.com'        base: '/'
//   User site (repo named
//     aidantruel.github.io)    → 'https://aidantruel.github.io'  base: '/'
//   Project repo (any name)    → 'https://aidantruel.github.io'  base: '/repo-name'
//
// If you use a project repo, uncomment `base` below AND set it in the deploy
// workflow too. Custom domain is the recommended path — see README.
// ─────────────────────────────────────────────────────────────────────────────
export default defineConfig({
  site: 'https://aidantruel.github.io',
  // base: '/personal-site',
  trailingSlash: 'ignore',
});
