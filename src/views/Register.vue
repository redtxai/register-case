<template>
  <div class="register">
    <InputField label="Nome Completo" />
    <InputField label="Email" placeholder="Digite seu email" />
    <InputField label="Telefone" placeholder="Qual seu celular?" />
    <InputField label="Empresa" placeholder="Qual sua empresa?" />
    <button>CHECK IN</button>
  </div>
</template>

<script>
import InputField from "@/components/InputField.vue";

export default {
  name: "home",
  components: {
    InputField
  },
  methods: {
    checkIn() {
      this.$router.push("/register");
    }
  }
};
</script>

<style lang="scss" scoped>
.register {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  padding: 15% 5%;
  box-sizing: border-box;
}
</style>
