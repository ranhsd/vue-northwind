module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: 'https://services.odata.org'
  },
  transpileDependencies: [
    "vuetify"
  ]
}