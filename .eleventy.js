module.exports = function (eleventyConfig) {
    // Static assets
    eleventyConfig.addPassthroughCopy("styles.css");
    eleventyConfig.addPassthroughCopy("1440-logo.svg");
    eleventyConfig.addPassthroughCopy("favicon.svg");
    eleventyConfig.addPassthroughCopy("favicon.ico");

    return {
        dir: {
            input: ".",
            output: "_site",
        },
    };
};
