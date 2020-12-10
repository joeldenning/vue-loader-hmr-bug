module.exports = {
  configureWebpack: {
    externals: {
      vue: 'Vue'
    }
  },
  chainWebpack(config) {
    // UNCOMMENT THIS to work around the bug

    // config.module.rule('vue').use('vue-loader').tap(options => {
    //   options.hotReload = false;
    //   return options
    // })
  }
}