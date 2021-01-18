import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _908cda36 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _41c3ab06 = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages/login/index" */))
const _024891bc = () => interopDefault(import('..\\pages\\register\\index.vue' /* webpackChunkName: "pages/register/index" */))

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
    component: _908cda36,
    name: "index___en"
  }, {
    path: "/login",
    component: _41c3ab06,
    name: "login___ru"
  }, {
    path: "/register",
    component: _024891bc,
    name: "register___ru"
  }, {
    path: "/en/login",
    component: _41c3ab06,
    name: "login___en"
  }, {
    path: "/en/register",
    component: _024891bc,
    name: "register___en"
  }, {
    path: "/",
    component: _908cda36,
    name: "index___ru"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
