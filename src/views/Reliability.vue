<template>
  <article class="reliability">
    <h3>Termo de Confiabilidade</h3>
    <embed :src="require('@/assets/files/reliability-terms.pdf')">
  </article>
</template>

<script>
export default {
  name: "Reliability"
};
</script>

<style lang="scss" scoped>
.reliability {
  width: 100%;
  height: 100%;
  padding: 15% 10%;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h3 {
    margin: 0;
    padding: 0;
    font-weight: 700;
    font-size: 25px;
  }

  embed {
    width: 100%;
    height: 35%;
  }
}
</style>
