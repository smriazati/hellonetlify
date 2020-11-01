
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
  plugins: [`~/plugins/getGames.server.js`],
 /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
 modules: ["@nuxtjs/apollo"],
 apollo: {
  clientConfigs: {
    default: {
      httpEndpoint: process.env.HASURA_ENDPOINT
    }
  }
},
env: {
  strapiApi: process.env.STRAPI_ENDPOINT,
},
 /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
