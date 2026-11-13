# Aleshba Riaz Ali portfolio

A responsive Astro site with Tailwind CSS, static case-study pages, and self-hosted fonts.

## Run locally

Use Node.js 22.12+ (22 LTS recommended).

```bash
npm ci
npm run dev
```

Open the local URL printed by Astro. Run `npm run build` to generate the static site.

## Publish on GitHub Pages

1. Create a GitHub repository and put the contents of this folder at its root on the `main` branch.
2. In repository **Settings → Pages**, choose **GitHub Actions** as the source.
3. Run **Deploy portfolio to GitHub Pages** from the Actions tab, or push another commit to `main`.

The workflow uses the Pages URL and repository base path automatically. It supports a username site and a project repository.

## Add a project

Copy a Markdown file in `src/content/projects/` and give it a new filename. Set the title, summary, tags, and order in its frontmatter. The homepage and project page update on the next build. The filename becomes the URL slug.

To use a screenshot, place a compressed image in `public/images/` and add fields such as:

```yaml
image: images/your-dashboard.webp
imageAlt: Dashboard showing monthly sales and return rates
```

Use optional `live` and `source` fields for project links. The site includes the edited portrait and uses the email address provided on the CV. Review the case-study figures before publishing.
