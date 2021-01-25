const path = require('path')

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

  router: {
    // middleware: 'auth',
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/auth',
    '@nuxtjs/axios',
    '@nuxt/content',
    'nuxt-i18n',
    'nuxt-buefy',
  ],

  i18n: {
    defaultLocale: 'ru',
    langDir: 'lang/',
    lazy: true,
    vueI18nLoader: true,
    locales: [
      { code: 'ru', iso: 'ru-RU', file: 'ru-RU.js', name: 'Русский' },
      { code: 'en', iso: 'en-US', file: 'en-US.js', name: 'English' },
    ],
  },

  loading: {
    color: 'red',
    height: '5px',
  },

  // https://auth.nuxtjs.org/guide
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/auth/login',
            method: 'post',
            propertyName: 'access_token',
          },
          logout: { url: '/auth/logout', method: 'post' },
          user: { url: '/auth/user', method: 'get', propertyName: 'user' },
        },
        tokenRequired: true,
        tokenType: 'Bearer',
      },
    },
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},
  
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue|ts)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true,
          },
        });
      }
    },
  },
};
