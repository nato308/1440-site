module.exports = function (eleventyConfig) {
    // Static assets
    eleventyConfig.addPassthroughCopy("styles.css");
    eleventyConfig.addPassthroughCopy("favicon.ico");

    return {
        dir: {
            input: ".",
            output: "_site",
        },
    };
};
