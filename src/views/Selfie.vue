<template>
  <div class="selfie">
    <div v-if="showSelfie" class="photo">
      <img alt="Selfie" :src="image" />
      <button class="repeat" @click="repeat">&lt; REPEAT</button>
      <button class="next" @click="next">NEXT</button>
    </div>
    <div v-else class="video">
      <video ref="video" autoplay></video>
      <button @click="takePhoto">PHOTO</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Selfie",
  data() {
    return {
      showSelfie: false,
      image: "",
      constraints: {
        audio: false,
        video: true
      },
      stream: null
    };
  },
  mounted() {
    this.startVideo();
  },
  methods: {
    takePhoto() {
      const video = this.$refs.video;

      const canvas = document.createElement("canvas");

      const width = video.videoWidth;
      const height = video.videoHeight;

      canvas.width = width;
      canvas.height = height;

      const context = canvas.getContext("2d");
      context.drawImage(video, 0, 0, width, height);

      const self = this;

      this.getCanvasBlob(canvas).then(function(blob) {
        self.image = URL.createObjectURL(blob);
        self.showSelfie = true;
        self.stopVideo();
      });
    },
    getCanvasBlob(canvas) {
      return new Promise(function(resolve) {
        canvas.toBlob(function(blob) {
          resolve(blob);
        }, "image/jpeg");
      });
    },
    repeat() {
      this.image = null;
      this.showSelfie = false;
      this.startVideo();
    },
    next() {
      this.$router.push("/reliability");
    },
    stopVideo() {
      if (this.stream) {
        this.stream.getTracks().forEach(function(track) {
          track.stop();
        });
      }
    },
    startVideo() {
      this.stopVideo();
      navigator.mediaDevices.getUserMedia(this.constraints).then(stream => {
        this.stream = stream;
        this.$refs.video.srcObject = stream;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.selfie {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  .video {
    width: 100%;
    height: 100%;

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 0;
    }

    button {
      position: absolute;
      bottom: 7%;
      left: 50%;
      transform: translateX(-50%);
      z-index: 10;
    }
  }

  .photo {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 0;
    }

    button {
      position: absolute;
      bottom: 7%;
      transform: translateX(-50%);
      z-index: 10;

      &[class^="repeat"] {
        left: 25%;
      }

      &[class^="next"] {
        left: 75%;
      }
    }
  }
}
</style>
