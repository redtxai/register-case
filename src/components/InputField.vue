<template>
  <div class="input-field">
    <label :for="name">
      {{ label }}
    </label>
    <the-mask
      v-if="masked"
      :mask="mask"
      :masked="masked"
      :type="type"
      :name="name"
      :id="name"
      :placeholder="placeholder"
      v-model="inputValue"
      @input="updateValue"
    />
    <input
      v-else
      :type="type"
      :name="name"
      :id="name"
      :placeholder="placeholder"
      v-model="inputValue"
      @input="updateValue"
    />
  </div>
</template>

<script>
import { TheMask } from "vue-the-mask";

export default {
  name: "InputField",
  components: { TheMask },
  props: {
    value: {
      default: ""
    },
    type: {
      default: "text"
    },
    name: {
      default: "name"
    },
    label: {
      default: "Name"
    },
    placeholder: {
      default: ""
    }
  },
  data() {
    return {
      masked: false,
      mask: "",
      inputValue: ""
    };
  },
  created() {
    if (this.type === "phone") {
      this.masked = true;
      this.mask = "+## (##) ####-####";
    }
  },
  methods: {
    updateValue() {
      this.$emit("input", this.inputValue);
    }
  }
};
</script>

<style lang="scss" scoped>
.input-field {
  background: white;
  width: 100%;
  height: 60px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  font-weight: 400;

  label {
    color: $label;
    font-size: 15px;
    line-height: 20px;
    height: 20px;
    text-align: left;
  }

  input {
    width: 100%;
    height: 40px;
    font-size: 21px;
    color: $input;
    border: 0;
    border-bottom: 1px solid $border-input;
    outline: none;

    &::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      font-size: 21px;
      color: $input-placeholder;
    }
  }
}
</style>
