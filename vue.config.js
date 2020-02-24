module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/styles/scss/main.scss";'
      },
      }
    },

  publicPath: './',
  outputDir: './dist'
}