module.exports = {
  publicPath: process.env.NODE_ENV == "production" ? "./" : "/",
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      },
      postcss: {
        plugins: [require("postcss-px2rem")({
          remUnit: 75
        })]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  chainWebpack: config => {
    // GraphQL Loader
    config.module
  },

  lintOnSave: false

}
