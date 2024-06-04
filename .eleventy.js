module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/assets/css/')
  eleventyConfig.addWatchTarget('./src/assets/css/')
  eleventyConfig.addPassthroughCopy('./src/assets/images/')
  eleventyConfig.addPassthroughCopy('./src/assets/js/')
  eleventyConfig.addPassthroughCopy('./src/admin/')

  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  }
}
