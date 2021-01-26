<template>
    <!-- width and height are optional -->
    <lottie :width="1024" :height="1024" :options="lottieOptions" v-on:animCreated="handleAnimation" />
</template>

<script>

import lottie from 'vue-lottie/src/lottie.vue'
import * as animationData from "~/assets/aedata.json";

export default {
  layout: 'experiments',
  components: {
    lottie
  },
  data() {
    return {
      anim: null, // for saving the reference to the animation
      lottieOptions: { animationData: animationData.default }
    };
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim;
    }
  }
}
</script>

<style lang='scss'>

body {
    background: white;
}
</style>