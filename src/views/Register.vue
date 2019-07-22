<template>
  <div class="register">
    <InputField label="Nome Completo" />
    <InputField label="Email" placeholder="Digite seu email" />
    <InputField label="Telefone" placeholder="Qual seu celular?" type="phone" />
    <InputField label="Empresa" placeholder="Qual sua empresa?" />
    <Select />
    <button @click="next">NEXT</button>
  </div>
</template>

<script>
import InputField from "@/components/InputField.vue";
import Select from "@/components/Select.vue";

export default {
  name: "home",
  components: {
    InputField,
    Select
  },
  methods: {
    next() {
      this.$router.push("/selfie");
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

  padding: 5% 5%;
  box-sizing: border-box;
}
</style>
