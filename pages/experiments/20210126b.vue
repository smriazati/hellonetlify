<template>
  <div class="wrapper">
    <!-- <button @click="getTime()">get minute</button>
    <button @click="jumpToMinute()">jump to minute</button>
    <p>{{ minute }}</p> -->
    <div class="lottie-wrapper color-pulse">
      <lottie :options="lottieOptions" v-on:animCreated="handleAnimation" />
    </div>
  </div>
</template>

<script>
import lottie from "vue-lottie/src/lottie.vue";
import * as animationData from "~/assets/clocknumstimed.json";

export default {
  layout: "experiments",
  components: {
    lottie,
  },
  data() {
    return {
      anim: null, // for saving the reference to the animation
      lottieOptions: { 
          animationData: animationData.default 
      },
    //   hour: null,
      minute: null,
      second: null,
      startFrame: null,
      animationSpeed: 1
    };
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim;
      this.setSpeed();
    },
    setSpeed() {
        if (this.anim && this.animationSpeed) {
            this.anim.setSpeed(this.animationSpeed);
        }
    },
    getTime() {
        var now = new Date();
        // this.hour = now.getHours();
        this.minute = now.getMinutes().toString();
        this.second = now.getSeconds();
    },
    jumpToMinute() {
        if (this.minute === null || this.second === null) {
            this.getTime();
        }
        var second = this.second;
        var minute = this.minute.toString();
        if (minute.length > 1) {
            minute = minute.slice(1);
        }

        // 1 minute is 1800 frames
        var clockTotalSeconds = minute * 60 + second;
        console.log('clocktime ' + minute + 'm ' + second + 's, aka ' + clockTotalSeconds + 's');
        var clockElapsedPercent = clockTotalSeconds / 600;
        var animDuration = 18000;
        // take total amount of seconds and figure out 
        this.startFrame = clockElapsedPercent * animDuration;
        console.log(clockElapsedPercent, this.startFrame);

        this.anim.goToAndPlay(this.startFrame, true)
    }
  },
  mounted() {
      this.jumpToMinute();
  }
};
</script>

<style lang='scss'>


.lottie-wrapper {
  width: 100vw;
  height: 90vh;
  > * {
    width: 100%;
    height: 100%;
  }
}

@keyframes colorPulse {
    0% {
        fill: rgb(255, 189, 204);
    }

    50% {
        fill: rgb(27, 29, 89)
    }
    100% {
        fill: rgb(10, 10, 198);
    }
}
.color-pulse {
    g rect {
        animation: colorPulse 60s ease infinite alternate;
    }
}
</style>