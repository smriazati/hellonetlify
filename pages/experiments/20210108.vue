<template>
    <section>
        <h1 ref="logo">Lorem ipsum</h1>
    </section>
</template>

<script>
export default {
  layout: 'experiments',
  methods: {
    startAnimation() {
      const ref = this.$refs.logo;
      gsap.set(ref, {
        fontSize: 0, 
        y: 0
      });
      gsap.to(ref, {
        duration: 5,
        fontSize: 48,
        y: 100
      })
    }
  },
  mounted() {
    console.log('mounted');
    const gsapLoaded = gsap;
    if (gsapLoaded) {
      console.log('starting animation');
      this.startAnimation();
    }
  }
}
</script>

<style lang='scss'>


</style>