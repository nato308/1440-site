module.exports = function (eleventyConfig) {
    // Keep your existing static assets available in the output.
    eleventyConfig.addPassthroughCopy("styles.css");

    // During migration, ignore the legacy HTML files to avoid output conflicts.


    return {
        dir: {
            input: ".",
            output: "_site"
        }
    };
};
