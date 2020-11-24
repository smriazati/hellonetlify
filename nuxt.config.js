require('dotenv').config()
export default {
  /*
  ** Headers of the page
  */
  head: {
    title: 'sarahteachescode.art' || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    `~/plugins/getGames.server.js`,
    '~/plugins/axios.js'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    "@nuxtjs/apollo",
    '@nuxtjs/dotenv',
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  axios: {
    proxy: true // Can be also an object with default options
  },
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.HASURA_ENDPOINT
      }
    }
  },
  publicRuntimeConfig: {
    strapiApi: process.env.STRAPI_ENDPOINT,
  },
  privateRuntimeConfig: {
  },
  /*
   ** Build configuration
   */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      transpile: [/^vue2-google-maps($|\/)/]
    }
  }
}
