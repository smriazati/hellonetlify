<template>
  <div class="home page-wrapper">
    <div>
      <h2>experiments</h2>
      <RouteLister routeName="experiments-"/>
    </div>
  </div>
</template>

<script>
import RouteLister from '@/components/RouteLister.vue'
export default {
  layout: 'landing-layout',
  components: {
    RouteLister
  }
  
}
</script>

<style lang='scss'>


</style>