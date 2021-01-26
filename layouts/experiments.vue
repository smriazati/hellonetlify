<template>
  <div>
    <nav><nuxt-link to="/">back</nuxt-link></nav>
    <Nuxt />

  </div>
</template>
<script>
// import SiteNav from '@/components/SiteNav.vue'
export default {
}
</script>

<style lang="scss">
nav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}

</style>
