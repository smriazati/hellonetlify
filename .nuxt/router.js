import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4ea5630c = () => interopDefault(import('../pages/experiments/20210108.vue' /* webpackChunkName: "pages/experiments/20210108" */))
const _48268d96 = () => interopDefault(import('../pages/experiments/20210125.vue' /* webpackChunkName: "pages/experiments/20210125" */))
const _480a5e94 = () => interopDefault(import('../pages/experiments/20210126.vue' /* webpackChunkName: "pages/experiments/20210126" */))
const _b3c950c8 = () => interopDefault(import('../pages/experiments/20210126b.vue' /* webpackChunkName: "pages/experiments/20210126b" */))
const _0ee5bdd3 = () => interopDefault(import('../pages/experiments/20210211.vue' /* webpackChunkName: "pages/experiments/20210211" */))
const _5ee3e3c2 = () => interopDefault(import('../pages/experiments/20210211b.vue' /* webpackChunkName: "pages/experiments/20210211b" */))
const _7743d13b = () => interopDefault(import('../pages/experiments/20210406.vue' /* webpackChunkName: "pages/experiments/20210406" */))
const _3a9e6a77 = () => interopDefault(import('../pages/tuts/chartly.vue' /* webpackChunkName: "pages/tuts/chartly" */))
const _647cd7eb = () => interopDefault(import('../pages/tuts/graphqulhasuranuxt.vue' /* webpackChunkName: "pages/tuts/graphqulhasuranuxt" */))
const _3b64de84 = () => interopDefault(import('../pages/tuts/gsapbasics.vue' /* webpackChunkName: "pages/tuts/gsapbasics" */))
const _c4b53dc4 = () => interopDefault(import('../pages/tuts/template.vue' /* webpackChunkName: "pages/tuts/template" */))
const _43135587 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/experiments/20210108",
    component: _4ea5630c,
    name: "experiments-20210108"
  }, {
    path: "/experiments/20210125",
    component: _48268d96,
    name: "experiments-20210125"
  }, {
    path: "/experiments/20210126",
    component: _480a5e94,
    name: "experiments-20210126"
  }, {
    path: "/experiments/20210126b",
    component: _b3c950c8,
    name: "experiments-20210126b"
  }, {
    path: "/experiments/20210211",
    component: _0ee5bdd3,
    name: "experiments-20210211"
  }, {
    path: "/experiments/20210211b",
    component: _5ee3e3c2,
    name: "experiments-20210211b"
  }, {
    path: "/experiments/20210406",
    component: _7743d13b,
    name: "experiments-20210406"
  }, {
    path: "/tuts/chartly",
    component: _3a9e6a77,
    name: "tuts-chartly"
  }, {
    path: "/tuts/graphqulhasuranuxt",
    component: _647cd7eb,
    name: "tuts-graphqulhasuranuxt"
  }, {
    path: "/tuts/gsapbasics",
    component: _3b64de84,
    name: "tuts-gsapbasics"
  }, {
    path: "/tuts/template",
    component: _c4b53dc4,
    name: "tuts-template"
  }, {
    path: "/",
    component: _43135587,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
