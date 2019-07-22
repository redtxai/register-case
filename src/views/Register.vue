<template>
  <div class="register">
    <InputField label="Name" />
    <InputField label="Email" placeholder="Your email" />
    <InputField label="Phone" placeholder="Your phone" type="phone" />
    <InputField label="Neque porro" placeholder="Quisquam est qui" />
    <Select :options="options" :label="label" :placeholder="placeholder" />
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
  data() {
    return {
      label: "Etiam at gravida",
      placeholder: "Nunc at sem et",
      options: ["Suscipit", "Vestibulum", "Vulputate", "Fringilla"]
    };
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
