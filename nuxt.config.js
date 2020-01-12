import nuxtPort from './port.js'
export default {
  mode: 'universal',
  /*
   ** Custom port
   */
  server: {
    port: nuxtPort
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['element-ui/lib/theme-chalk/index.css', '@/assets/scss/index.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/element-ui'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  bootstrapVue: {
    // bootstrapCSS: false, // here you can disable automatic bootstrapCSS in case you are loading it yourself using sass
    // bootstrapVueCSS: false, // CSS that is specific to bootstrapVue components can also be disabled. That way you won't load css for modules that you don't use
    // componentPlugins: ['Collapse', 'Dropdown'], // Here you can specify which components you want to load and use
    // directivePlugins: [] // Here you can specify which directives you want to load and use. Look into official docs to get a list of what's available
  },
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
