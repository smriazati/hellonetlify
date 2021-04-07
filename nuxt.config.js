require('dotenv').config()
export default {
  /*
  ** Headers of the page
  */
  target: 'static',
  head: {
    title: 'sarah riazati CODE ART LABORATORY' || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'sarah riazati CODE ART LABORATORY' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js'
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollTrigger.min.js'
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  components: true,
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
    '~/plugins/axios.js',
    { src: '@/plugins/vimeo-player.js', ssr: false }
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
    vendor: [
      'vue-vimeo-player'
    ],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      transpile: [/^vue2-google-maps($|\/)/]
    }
  }
}
