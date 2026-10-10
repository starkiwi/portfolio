export default function(eleventyConfig) {
    //add pass through of stylesheets
    eleventyConfig.addPassthroughCopy("./styles/");
    eleventyConfig.addWatchTarget("./styles/");

    //add pass through of slicknav
    eleventyConfig.addPassthroughCopy("./slicknav/");
    eleventyConfig.addWatchTarget("./slicknav/");

    //add pass through of images
    eleventyConfig.addPassthroughCopy("./images/");
    eleventyConfig.addWatchTarget("./images/");

    eleventyConfig.addPassthroughCopy("./scripting/");
    eleventyConfig.addWatchTarget("./scripting/");

    eleventyConfig.ignores.add("_site/**");

    return {
      dir: {
        input: ".",
        includes: "_includes",
        data: "_data",
        output: "_site"
      },
      templateFormats: ["html", "njk", "md", "11ty.js"]
    };
  };