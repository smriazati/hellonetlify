<template>
  <div class="wrapper">
    <!-- width and height are optional 
      <h1>
        Make a video player for italy collages that triggers different
        animations
      </h1>
      <ol>
        <li>embed the player with vue vimeo component</li>
        <li>add 3 animations</li>
        <li>get timestamp messages &amp; trigger animation starts</li>
      </ol>
    </div>
    -->
      <client-only>
        <vimeo-player
          ref="player"
          :options="playerOptions"
          video-id="277006925"
          video-url="https://vimeo.com/277006925/c16e626108"
          @ready="onVidReady"
          @loaded="onVidLoaded"
          @playing="onVidPlaying"
          @ended="onVidEnded"
        />
      </client-only>
        <div class="remote">
            <button @click="togglePlayback()">{{ playbackMessage }}</button>
        </div>
        <div class="playcounts">
            <ul>
                <li v-for="item in playCount" :key="item">
                    I remember
                    <lottie :ref="'anim' + item" :width="50" :height="50" :options="lottieOptions" v-on:animCreated="handleAnimation" />
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
import lottie from "vue-lottie/src/lottie.vue";
import * as animationData from "~/assets/aedata.json";

export default {
  layout: "experiments",
  components: {
    lottie,
  },
  data() {
    return {
      anim: [], // for saving the reference to the animation
      lottieOptions: { 
          animationData: animationData.default 
      },
      playerOptions: {
        muted: true,
        loop: true,
        autoplay: true,
        controls: false
      },
      playCount: 0,
      playbackMessage: 'Pause'
    };
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim.push(anim);
    },
    onVidReady() {
      console.log("ready");
    },
    onVidLoaded() {
      console.log("loaded");
    },
    onVidPlaying() {
      console.log("playing");
      this.playCount++;
    },
    onVidEnded() {
      console.log("ended");
    },
    togglePlayback() {
        if (this.playbackMessage === 'Pause') {
            this.pausePlayer();
            this.pauseLottiePlayers();
        } else if (this.playbackMessage === 'Play') {
            this.playPlayer();
            this.playLottiePlayers();
        }
    },
    pauseLottiePlayers() {
        this.anim.forEach( i => {
            i.pause();
        })
    },
    playLottiePlayers() {
        this.anim.forEach( i => {
            i.play();
        })
    },
    pausePlayer() {
        let ref = this.$refs.player;
        ref.player.pause();
        this.playbackMessage = 'Play'
    },
    playPlayer() {
        let ref = this.$refs.player;
        ref.player.play();
        this.playbackMessage = 'Pause'
    }
  },
};
</script>

<style lang='scss'>
body {
  background: white;
}
</style>