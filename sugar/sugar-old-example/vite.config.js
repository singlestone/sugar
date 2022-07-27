const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        chat: resolve(__dirname, "chat.html"),
        color: resolve(__dirname, "color.html"),
        modal: resolve(__dirname, "modal.html"),
        itemDetail: resolve(__dirname, "item-detail.html"),
        itemsDense: resolve(__dirname, "items-dense.html"),
        scroll: resolve(__dirname, "scroll.html"),
        skeleton: resolve(__dirname, "skeleton.html"),
        // any new pages need to go in here.
        // things like the typography page and such.
      },
    },
  },
});
