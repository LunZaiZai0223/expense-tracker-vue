const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      // 因為 loader 版本不同，所以要用 additionalData
      sass: {
        additionalData: `
      @import "~@/assets/scss/color.scss";
      @import "~@/assets/scss/material.scss";
    `,
      },
    },
  },
});
