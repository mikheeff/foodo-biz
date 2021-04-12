import { NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Foodo frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Manrope&display=swap',
      },
    ],
  },

  router: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    extendRoutes(routes) {
      routes.push(
        {
          path: '/',
          redirect: 'home',
        },
      );
    },
    linkActiveClass: 'is-active',
    linkExactActiveClass: 'is-exact-active',
    // middleware: 'auth',
  },

  pageTransition: {
    name: 'opacity',
    mode: 'out-in',
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/styles/global.scss'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: [{ path: '~/components', global: 'dev' }],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/auth-next',
    '@nuxtjs/axios',
    '@nuxt/content',
    'nuxt-i18n',
    ['nuxt-buefy', { css: false }],
    [
      'nuxt-typed-router',
      {
        filePath: './models/__routes.ts',
      },
    ],
  ],

  plugins: [
    '~/plugins/nuxt-typed-router.ts',
    '~/plugins/Vuelidate.ts',
  ],

  i18n: {
    defaultLocale: 'ru',
    langDir: 'lang/',
    lazy: true,
    vueI18nLoader: true,
    locales: [
      { code: 'ru', iso: 'ru-RU', file: 'ru-RU.ts', name: 'Русский' },
      { code: 'en', iso: 'en-US', file: 'en-US.ts', name: 'English' },
    ],
    strategy: 'no_prefix',
  },

  loading: {
    color: '#0e98a4',
    height: '4px',
  },

  axios: {
    baseURL: 'http://api.linboard.online/api',
  },

  // https://auth.nuxtjs.org/guide
  auth: {
    strategies: {
      local: {
        token: {
          property: 'access_token',
        },
        user: {
          property: false,
        },
        endpoints: {
          login: {
            url: '/auth/login',
            method: 'post',
            propertyName: 'access_token',
          },
          logout: { url: '/auth/logout', method: 'post' },
          user: { url: '/auth/user', method: 'get' },
        },
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
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient && config.module) {
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

export default config;
