<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
}
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
}
</style>
