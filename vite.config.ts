import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import nodePolyfills from "rollup-plugin-polyfill-node";

const MODE = process.env.NODE_ENV;
const development = MODE === "development";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    development &&
      nodePolyfills({
        include: [
          "node_modules/**/*.js",
          new RegExp("node_modules/.vite/.*js"),
        ],
      }),
  ],
  resolve: {
    alias: {
      crypto: "crypto-browserify",
      stream: "stream-browserify",
      assert: "assert",
    },
  },
  build: {
    rollupOptions: {
      plugins: [nodePolyfills({})],
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
