<template>
  <div class="container container-20210211">
    <div class="image-stack">
      <ImageFader
        v-for="item in count"
        :key="item"
        :img="`/20210211/boatgraveyard/photos-${item}.jpg`"
        alt="test alt"
      />
    </div>
  </div>
</template>

<script>
export default {
  layout: "experiments",
  data() {
    return {
      count: 0,
      max: 65,
      delay: 500,
    };
  },
  mounted() {
    this.countDownTimer();
  },
  methods: {
    countDownTimer() {
      if (this.count < this.max) {
        setTimeout(() => {
          this.count++;
          this.countDownTimer();
        }, this.delay);
      } else {
        this.restartLoop();
      }
    },
    restartLoop() {
      this.count = 0;
      this.countDownTimer();
    },
  },
};
</script>

<style lang="scss">
.container-20210211 {
  background: black;
}
.image-stack {
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  > figure {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    img {
      object-fit: cover;
      min-height: 100%;
      width: 100%;
    }
  }
}
</style>