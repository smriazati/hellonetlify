<template>
  <div class="home page-wrapper">
    <div>
      <h2>experiments</h2>
      <ListRoutes routeName="experiments-"/>
    </div>
  </div>
</template>

<script>
import ListRoutes from '@/components/ListRoutes.vue'

export default {
  layout: 'landing-layout',
  components: {
    ListRoutes
  }
  
}
</script>

<style lang='scss'>


</style>