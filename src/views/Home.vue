<template>
  <div class="home">
    <div>
      <p>Bem vindo(a) ao nosso</p>
      <p>Customer Center São Carlos!</p>
    </div>
    <button @click="checkIn">CHECK IN</button>
  </div>
</template>

<script>
export default {
  name: "home",
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
