<template>
  <div class="container">
    <section class="tut">
        <h1 v-if="tut.name">{{ tut.name}}</h1>
        <p v-if="tut.url"><a :href="tut.url" target="_blank">Tutorial</a></p>
    </section>
    
  </div>
</template>

<script>
export default {
    data() {
        return {
            tut: {
                name: 'Free GSAP 3 Express',
                url: 'https://www.creativecodingclub.com/courses/FreeGSAP3Express'
            }
        }
    }
}
</script>

<style lang='scss'>


</style>