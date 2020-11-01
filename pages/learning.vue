<template>
  <div class="index learning-index container">
    <section class="index-section tuts">
      <h2>Tutorials I'm Doing</h2>
      <p>Take notes, they say. Show your work, they say. Well, fine. Instead of just saving everything into Pocket I'll try to type my own code and post it here. Are you happy, future me???</p>
      <RouteLister routeName="tuts-"/>
    </section>
    <section class="index-section top-links">
      <nav>
        <h2>Pages I Need</h2>
        <p>Stop using your browser history as a linklist.</p>
        <ul>
            <li v-for="(item, index) in faveLinks" :key="index">
            <a :href="item.url" target="_blank">{{ item.name }}</a>
            </li>
        </ul>
      </nav>
    </section>
  </div>
</template>

<script>
import RouteLister from '@/components/routeLister.vue'
export default {
  data() {
      return {
          tutRoutes: [],
          faveLinks: [
            {
              name: 'GSAP Cheat Sheet',
              url: 'https://greensock.com/cheatsheet/'
            },
            {
              name: 'ScrollTrigger Demos',
              url: 'https://greensock.com/st-demos/'
            },
            {
              name: 'ScrollTrigger Intro Vid',
              url: 'https://greensock.com/docs/v3/Plugins/ScrollTrigger'
            },
            {
              name: 'Shopify Liquid Cheat Sheet',
              url: 'https://www.shopify.com/partners/shopify-cheat-sheet/'
            },
            {
              name: 'Shopify Sections',
              url: 'https://shopify.dev/docs/themes/sections'
            },
            {
              name: 'Shopify Settings',
              url: 'https://shopify.dev/docs/themes/settings'
            }
          ]
      }
  },
  components: {
    RouteLister
  }
}
</script>

<style lang='scss'>


</style>