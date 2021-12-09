export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "crm-v2",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    // link: [{ rel: "icon", type: "image/x-icon", href: "/minilogo.svg" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/custom.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~plugins/clickaway",
    "~plugins/datepicker",
    "~plugins/vue-select",
    "~plugins/infinite-scroll",
    "~plugins/vue-mobile",

    "~mixins/global",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    "~/components",
    { path: "~/components/icons", extensions: ["vue"] },
    { path: "~/components/layout", extensions: ["vue"] },
    { path: "~/components/styles", extensions: ["vue"] }
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa"
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en"
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
