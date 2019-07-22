<template>
  <div class="register">
    <InputField label="Name" placeholder="Your name" v-model="user.name" />
    <InputField label="Email" placeholder="Your email" v-model="user.email" />
    <InputField
      label="Phone"
      placeholder="Your phone"
      type="phone"
      v-model="user.phone"
    />
    <InputField
      label="Neque porro"
      placeholder="Quisquam est qui"
      v-model="user.neque"
    />
    <Select
      :options="selectSetup.options"
      :label="selectSetup.label"
      :placeholder="selectSetup.placeholder"
      v-model="user.selectValue"
    />
    <button @click="next">NEXT</button>
  </div>
</template>

<script>
import InputField from "@/components/InputField.vue";
import Select from "@/components/Select.vue";

export default {
  name: "Register",
  components: {
    InputField,
    Select
  },
  data() {
    return {
      selectSetup: {
        label: "Etiam at gravida",
        placeholder: "Nunc at sem et",
        options: ["Suscipit", "Vestibulum", "Vulputate", "Fringilla"]
      },
      user: {
        name: "",
        email: "",
        phone: "",
        neque: "",
        selectValue: ""
      }
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
