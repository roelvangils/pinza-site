import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import markdownItAnchor from "markdown-it-anchor";
import sections from "./docs/_data/sections.js";

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
  });

  // {% kbd "⌃", "⌥", "C" %} → keycaps in the site's signature motif.
  eleventyConfig.addShortcode("kbd", (...keys) =>
    keys.map((k) => `<kbd class="cap">${k}</kbd>`).join("")
  );

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
