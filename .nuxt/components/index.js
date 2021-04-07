export { default as AppGame } from '../../components/AppGame.vue'
export { default as ImageFader } from '../../components/ImageFader.vue'
export { default as ListRoutes } from '../../components/ListRoutes.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as SiteNav } from '../../components/SiteNav.vue'
export { default as BarChart } from '../../components/barChart.vue'

export const LazyAppGame = import('../../components/AppGame.vue' /* webpackChunkName: "components/AppGame" */).then(c => c.default || c)
export const LazyImageFader = import('../../components/ImageFader.vue' /* webpackChunkName: "components/ImageFader" */).then(c => c.default || c)
export const LazyListRoutes = import('../../components/ListRoutes.vue' /* webpackChunkName: "components/ListRoutes" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazySiteNav = import('../../components/SiteNav.vue' /* webpackChunkName: "components/SiteNav" */).then(c => c.default || c)
export const LazyBarChart = import('../../components/barChart.vue' /* webpackChunkName: "components/barChart" */).then(c => c.default || c)
