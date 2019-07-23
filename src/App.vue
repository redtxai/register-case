<template>
  <div id="app">
    <button class="back" @click="back" v-if="this.$route.meta.showBackButton">
      &lt;
    </button>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;

  width: 100vw;
  height: 100vh;
}

#app {
  font-family: "Roboto", sans-serif;
  text-align: center;
  color: $main;

  width: 100%;
  height: 100%;
  max-width: 500px;

  display: flex;
  margin: auto;

  .back {
    position: fixed;
    left: 10px;
    top: 10px;
    z-index: 10;
    width: 35px;
    height: 35px;
  }
}
</style>
