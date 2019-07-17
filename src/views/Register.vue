<template>
  <div class="home">
    <img alt="ambar logo" src="../assets/images/logo.png" />
    <div>
      <p>Bem vindo(a) ao nosso</p>
      <p>Customer Center São Carlos!</p>
    </div>
    <button>CHECK IN</button>
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

  img {
    width: 331.95px;
    height: 158.5px;
  }

  div {
    p {
      margin: 0;
      font-weight: bold;
    }
  }
}
</style>
