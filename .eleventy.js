const pluginSass = require("eleventy-plugin-sass");
const sitemap = require("@quasibit/eleventy-plugin-sitemap");

module.exports = function (eleventyConfig) {
  // Eleventy doesn't watch changes in files / folders mentioned
  // in .gitignore by default. We disabled that feature since we
  // want eleventy to watch changes in the sass compiles css folder.
  eleventyConfig.setUseGitIgnore(false);

  // Copy complete directories to _site folder so that they
  // are available to be rendered.
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("images");

  // Add support scss files.
  eleventyConfig.addPlugin(pluginSass, {
    sourcemaps: true,
  });

  eleventyConfig.addPlugin(sitemap, {
    lastModifiedProperty: "modified",
    sitemap: {
      hostname: "https://example.com",
    },
  });

  return {
    dir: {
      input: 'src',
    }
  };
};
