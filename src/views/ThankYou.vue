<template>
  <div class="home">
    <img alt="Ambar logo" :src="logo" />
    <div>
      <p>Thank you!</p>
      <p>Enjoy your travel!</p>
    </div>
    <button @click="go">GO!</button>
  </div>
</template>

<script>
export default {
  name: "ThankYou",
  data() {
    return {
      logo: ""
    };
  },
  created() {
    this.logo = this.$store.getters.getLogo;
    if (!this.logo) {
      this.logo = require("@/assets/images/logo.png");
      this.$store.dispatch("setLogo", this.logo);
    }
  },
  methods: {
    go() {
      this.$router.push("/");
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

  padding: 20px 80px;
  box-sizing: border-box;

  img {
    width: 100%;
    height: auto;
  }

  div {
    p {
      margin: 0;
      font-weight: bold;
      font-size: 14px;
    }
  }
}
</style>
