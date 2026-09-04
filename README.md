# Personal site

Astro static site, deployed to GitHub Pages.

## Editing

Almost everything lives in **`src/site.config.ts`** — name, bio, education,
publications, awards and projects. Edit that file and the pages update.

| File | What it holds |
|---|---|
| `src/site.config.ts` | All content: bio, CV entries, publications, projects |
| `src/styles/global.css` | Colours, type, spacing (design tokens at the top) |
| `src/layouts/Base.astro` | `<head>`, nav, footer |
| `public/` | Static files served as-is — put `cv.pdf` and images here |

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serve the built site
```

## Videos

In `PROJECTS`, paste the ordinary **share URL** into `video:` —
`https://youtu.be/ID`, `https://www.youtube.com/watch?v=ID`, or
`https://vimeo.com/ID`. It's converted to a privacy-friendly embed
(`youtube-nocookie.com`) automatically. Omit the field for a project with no video.

## Deploying to GitHub Pages

1. Create a repo and push:

   ```bash
   git init && git add -A && git commit -m "Initial site"
   gh repo create <name> --public --source=. --push
   ```

2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

3. Push to `main`. `.github/workflows/deploy.yml` builds and deploys on every push.

### Custom domain

1. Buy the domain (Cloudflare Registrar is at-cost).
2. DNS records at your registrar:

   | Type | Name | Value |
   |---|---|---|
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |
   | CNAME | `www` | `<username>.github.io` |

   If you use Cloudflare's nameservers, set those records to **DNS only**
   (grey cloud), not proxied — proxying breaks GitHub's certificate issuance.

3. Settings → Pages → Custom domain → enter it, then tick **Enforce HTTPS**
   once the certificate is issued (can take up to an hour).
4. Set `site:` in `astro.config.mjs` to the final URL.

### If you use a project repo instead of `<username>.github.io`

Uncomment and set `base` in `astro.config.mjs` to `'/<repo-name>'`. Not needed
with a custom domain or a user site.

## Adding the blog later

Create `src/content/blog/*.md`, add a content collection config, and a
`src/pages/blog/[...slug].astro` route. Then uncomment the Blog link in
`src/layouts/Base.astro`.
