import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _dd8bd132 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _5ae1ba7e = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _7ed334c4 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/en",
    component: _dd8bd132,
    name: "index___en"
  }, {
    path: "/login",
    component: _5ae1ba7e,
    name: "login___ru"
  }, {
    path: "/register",
    component: _7ed334c4,
    name: "register___ru"
  }, {
    path: "/en/login",
    component: _5ae1ba7e,
    name: "login___en"
  }, {
    path: "/en/register",
    component: _7ed334c4,
    name: "register___en"
  }, {
    path: "/",
    component: _dd8bd132,
    name: "index___ru"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
