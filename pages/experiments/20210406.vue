<template>
  <div class="container">
    <div class="video-container">
      <client-only>
        <div class="iframe-wrapper">
          <vimeo-player
            ref="player"
            :key="playerKey"
            :video-id="videoID"
            :options="options"
            class="video-player"
            :class="myState.playerReady ? 'ready' : ''"
            @ready="onReady"
            @playing="onPlaying"
            @timeupdate="onTimeUpdate"
            @ended="onEnded"
          />
        </div>
      </client-only>
      <div class="video-overlay" @click="togglePlayback">
        <!-- <ul class="controls">
          <li>
            <span v-if="myState.isPlaying">Pause</span>
            <span v-else>Play</span>
          </li>
        </ul> -->
      </div>
    </div>
    <div class="progress-bar-container">
      <div
        class="progress-bar"
        :style="{ width: `${myState.percent * 100}%` }"
      ></div>
    </div>
    <div class="remote">
      <ul>
        <li @click="rewind">rewind</li>
        <li @click="fastForward">forward</li>
        <li @click="togglePlayback">
          <span v-if="myState.isPlaying">Pause</span>
          <span v-else>Play</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  layout: "experiments",
  data() {
    return {
      playerKey: 0,
      videoID: "110352975",
      options: {
        muted: true,
        autoplay: true,
      },
      options: {
        autoplay: true,
        muted: true,
        controls: false,
      },
      updatingTimeInterval: null,

      myState: {
        playerReady: false,
        isPlaying: false,
        duration: null,
        percent: null,
        seconds: null,
        updatingTime: 0, // -1 rewind , 0 playing , 1 fast forward,
      },
    };
  },
  methods: {
    onReady() {
      this.myState.playerReady = true;
    },
    play() {
      if (this.myState.updatingTime !== 0) {
        this.stopUpdatingTime();
      }
      this.myState.isPlaying = true;
      this.$refs.player.play();
    },
    pause() {
      if (this.myState.updatingTime !== 0) {
        this.stopUpdatingTime();
      }
      this.myState.isPlaying = false;
      this.$refs.player.pause();
    },
    togglePlayback() {
      if (this.myState.isPlaying) {
        this.pause();
      } else {
        this.play();
      }
      console.log(`Player is ${this.myState.isPlaying}`);
    },
    onEnded() {
      this.playerKey++;
    },
    onPlaying() {
      this.myState.isPlaying = true;
    },
    onTimeUpdate(event) {
      // set duration 1x
      if ((this.myState.duration = null)) {
        this.myState.duration = event.duration;
      }
      this.myState.seconds = event.seconds;
      this.myState.percent = event.percent;
    },
    fastForward() {
      if (this.myState.updatingTime !== 0) {
        this.myState.updatingTime = 0;
      } else {
        this.myState.updatingTime = 1;
        this.startUpdatingTime();
      }
    },
    rewind() {
      if (this.myState.updatingTime !== 0) {
        this.myState.updatingTime = 0;
      } else {
        this.myState.updatingTime = -1;
        this.startUpdatingTime();
      }
    },
    loopUpdatingTimeFunctions(callback, interval) {
      const doTask = () => {
        if (this.myState.updatingTime !== 0) {
          callback();
        } else {
          clearInterval(this.updatingTimeInterval);
        }
      };
      this.updatingTimeInterval = setInterval(doTask, interval);
    },
    startUpdatingTime() {
      this.loopUpdatingTimeFunctions(this.updateTime, 0);
    },
    stopUpdatingTime() {
      this.myState.updatingTime = 0;
    },
    updateTime() {
      var newTime = this.myState.seconds;
      const skip = 1;
      const ref = this.$refs.player;
      const direction = this.myState.updatingTime;
      //   const ref = this.$refs.player;
      //   if (!ref === false) {
      //     return;
      //   }

      if (direction === 1) {
        newTime += skip;
      }
      if (direction === -1) {
        newTime -= skip;
      }
      //   console.log(direction, newTime);
      ref.player
        .setCurrentTime(newTime)
        .then(() => {
          //   console.log("it happened", seconds);
          // seconds = the actual time that the player seeked to
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss">
.container {
  max-width: 960px;
  margin: 0 auto;
}

.video-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  > * {
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 1;
    grid-column-end: 2;
  }
  .video-overlay {
    z-index: 10;
    background: rgba(0, 0, 0, 0);
    transition: 0.3s ease background;
    ul.controls {
      display: none;
    }
    &:hover {
      //   background: rgba(0, 0, 0, 0.8);
      cursor: pointer;
      ul.controls {
        display: flex;
      }
    }
  }
  .video-player {
    z-index: 9;
  }
}

.video-overlay {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ul.controls {
    li {
      color: #ffffff;
    }
  }
}

.progress-bar-container {
  width: 100%;
  background: #ffffff;
}
.progress-bar {
  background: #000000;
  height: 20px;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.iframe-wrapper {
  background: #ffffff;
}
.iframe-wrapper div {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
  opacity: 0;
  &.ready {
    animation: fadeIn 1s ease-in forwards;
  }
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
}

.remote {
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    width: 100%;
    li {
      padding: 11px;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>