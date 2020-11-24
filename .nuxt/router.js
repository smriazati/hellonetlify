import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _592b746c = () => interopDefault(import('../pages/learning.vue' /* webpackChunkName: "pages/learning" */))
const _4bcc20a8 = () => interopDefault(import('../pages/sketches.vue' /* webpackChunkName: "pages/sketches" */))
const _1af32aea = () => interopDefault(import('../pages/tuts/chartly.vue' /* webpackChunkName: "pages/tuts/chartly" */))
const _c9021d8c = () => interopDefault(import('../pages/tuts/geocoding.vue' /* webpackChunkName: "pages/tuts/geocoding" */))
const _787d6198 = () => interopDefault(import('../pages/tuts/graphqulhasuranuxt.vue' /* webpackChunkName: "pages/tuts/graphqulhasuranuxt" */))
const _3be7359e = () => interopDefault(import('../pages/tuts/gsapbasics.vue' /* webpackChunkName: "pages/tuts/gsapbasics" */))
const _702ea1ea = () => interopDefault(import('../pages/tuts/template.vue' /* webpackChunkName: "pages/tuts/template" */))
const _7825e074 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/learning",
    component: _592b746c,
    name: "learning"
  }, {
    path: "/sketches",
    component: _4bcc20a8,
    name: "sketches"
  }, {
    path: "/tuts/chartly",
    component: _1af32aea,
    name: "tuts-chartly"
  }, {
    path: "/tuts/geocoding",
    component: _c9021d8c,
    name: "tuts-geocoding"
  }, {
    path: "/tuts/graphqulhasuranuxt",
    component: _787d6198,
    name: "tuts-graphqulhasuranuxt"
  }, {
    path: "/tuts/gsapbasics",
    component: _3be7359e,
    name: "tuts-gsapbasics"
  }, {
    path: "/tuts/template",
    component: _702ea1ea,
    name: "tuts-template"
  }, {
    path: "/",
    component: _7825e074,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
