module.exports = {
  lintOnSave: true,
  chainWebpack: config => {
    config.module
      .rule("pdf")
      .test(/\.pdf$/)
      .use("file-loader")
      .loader("file-loader");
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/styles/_variables.scss";
          @import "@/styles/_layout.scss";
        `
      }
    }
  },
  devServer: {
    open: process.platform === "darwin",
    host: "0.0.0.0",
    port: 8080,
    https: true,
    hotOnly: false
  }
};
