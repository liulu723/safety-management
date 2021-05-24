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
  //应用全局样式 
  chainWebpack: (config) => {
	  const oneOfsMap = config.module.rule("less").oneOfs.store;
	  oneOfsMap.forEach(item => {
	    item
	      .use("style-resources-loader")
	      .loader("style-resources-loader")
	      .options({
	        // or an array : ["./path/to/vars.less", "./path/to/mixins.less"] 这里的路径不能使用@，否则会报错
	        patterns: "./src/assets/theme.less"
	      })
	      .end()
	  })
	},
  lintOnSave: false

}
