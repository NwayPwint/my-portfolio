export default defineNuxtConfig({
  css: ["bootstrap/dist/css/bootstrap.min.css"],
  vite: {
    optimizeDeps: {
      include: ["bootstrap/dist/js/bootstrap.bundle.min.js"],
    },
  },
  ssr: false,
  nitro: {
    preset: "github-pages",
  },
});
