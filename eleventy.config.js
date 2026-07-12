import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import markdownItAnchor from "markdown-it-anchor";
import markdownItContainer from "markdown-it-container";
import sections from "./docs/_data/sections.js";

// Inline SVG icons for the callout boxes (stroke follows the text color).
const CALLOUT_ICONS = {
  hint:
    '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.7.5 1 1.3 1 2.1h5c0-.8.3-1.6 1-2.1A6 6 0 0 0 12 3z"/></svg>',
  help:
    '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9.5 9.2a2.5 2.5 0 1 1 3.8 2.1c-.8.5-1.3 1-1.3 1.9"/><circle cx="12" cy="16.8" r="0.6" fill="currentColor" stroke="none"/></svg>'
};

export default function (eleventyConfig) {
  // Build-time Prism classes; token colors live in css/help.css.
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.amendLibrary("md", (md) => {
    md.use(markdownItAnchor, {
      level: [2, 3],
      permalink: markdownItAnchor.permalink.headerLink({ class: "heading-anchor" })
    });
    // Wide tables must scroll inside a keyboard-focusable region, not the page.
    md.renderer.rules.table_open = () =>
      '<div class="table-scroll" tabindex="0" role="region" aria-label="Table, scrollable">\n<table>';
    md.renderer.rules.table_close = () => "</table>\n</div>";

    // ::: hint / ::: help callout boxes. The label doubles as the
    // accessible name; the icon is decorative.
    for (const [name, label] of [["hint", "Hint"], ["help", "Help"]]) {
      md.use(markdownItContainer, name, {
        render(tokens, idx) {
          if (tokens[idx].nesting === 1) {
            return (
              `<aside class="callout callout-${name}">` +
              `<span class="callout-icon" aria-hidden="true">${CALLOUT_ICONS[name]}</span>` +
              `<div class="callout-body"><p class="callout-label">${label}</p>\n`
            );
          }
          return "</div></aside>\n";
        }
      });
    }
  });

  // {% kbd "⌃", "⌥", "C" %} → keycaps in the site's signature motif.
  eleventyConfig.addShortcode("kbd", (...keys) =>
    keys.map((k) => `<kbd class="cap">${k}</kbd>`).join("")
  );

  // {% shot "file-name", "what the screenshot shows", "shape" %} →
  // an image from /img/screenshots/help/. The PNGs are 2x retina;
  // width/height attributes are the 1x display size. Dummy PNGs carry
  // the description; replace each file with a real screenshot at the
  // same pixel dimensions. Shapes: hud (wide strip), menu (narrow),
  // dialog (small close-up), window (default).
  const SHOT_DIMS = { window: [1440, 960], hud: [1440, 400], dialog: [960, 600], menu: [720, 880] };
  eleventyConfig.addShortcode("shot", (name, description, shape = "window") => {
    const [w, h] = SHOT_DIMS[shape];
    const esc = description
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;");
    return (
      `<figure class="shot shot-${shape}">` +
      `<img src="/img/screenshots/help/${name}.png" width="${w / 2}" height="${h / 2}" ` +
      `loading="lazy" alt="${esc}" title="Screenshot: ${esc}">` +
      `</figure>`
    );
  });

  // One ordered list of all help pages: drives the sidebar and prev/next.
  eleventyConfig.addCollection("help", (api) =>
    api.getFilteredByGlob("docs/**/*.md")
      .filter((p) => !p.data.excludeFromNav)
      .sort((a, b) =>
        (sections[a.data.section].order - sections[b.data.section].order) ||
        (a.data.order - b.data.order)
      )
  );

  eleventyConfig.addFilter("neighbors", (coll, url) => {
    const i = coll.findIndex((p) => p.url === url);
    return { prev: coll[i - 1] ?? null, next: coll[i + 1] ?? null };
  });

  return {
    dir: { input: "docs", output: "help", includes: "_includes", data: "_data" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
}
