<template>
  <div class="home">
    <img alt="Ambar logo" :src="logo" />
    <div>
      <p>Welcome to Lorem Ipsum</p>
      <p>check in platform!</p>
    </div>
    <button @click="checkIn">CHECK IN</button>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      logo: ""
    };
  },
  created() {
    this.$store.dispatch("setDefaultState");
    this.logo = this.$store.getters.getLogo;
    if (!this.logo) {
      this.logo = require("@/assets/images/logo.png");
      this.$store.dispatch("setLogo", this.logo);
    }
  },
  methods: {
    checkIn() {
      this.$router.push("/register");
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  padding: 15% 20%;
  box-sizing: border-box;

  img {
    width: 100%;
    height: auto;
  }

  div {
    p {
      margin: 0;
      font-weight: bold;
    }
  }
}
</style>
