const baseUrl = '//foodo-api.loc/api/'

export default {
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Foodo frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // ENV API
  env: {
    baseUrl: baseUrl,
    homeUrl: '/',
    loginUrl: '/login',
    logoutUrl: '/login',
  },

  router: {
    // middleware: 'auth',
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/vuex-persist', ssr: false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/auth',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxt/content',
    'nuxt-i18n'
  ],

  i18n: {
    defaultLocale: 'ru',
    langDir: 'lang/',
    lazy: true,
    vueI18nLoader: true,
    locales: [
      {code: 'ru', iso: 'ru-RU', file: 'ru-RU.js', name: 'Русский'},
      {code: 'en', iso: 'en-US', file: 'en-US.js', name: 'English'},
    ],
  },

  loading: {
    color: 'red',
    height: '5px'
  },

  // https://auth.nuxtjs.org/guide
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {url: '/auth/login', method: 'post', propertyName: 'access_token'},
          logout: {url: '/auth/logout', method: 'post'},
          user: {url: '/auth/user', method: 'get', propertyName: 'user'},
        },
        tokenRequired: true,
        tokenType: 'Bearer',
      },
    }
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: baseUrl
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  },
}
