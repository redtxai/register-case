<template>
  <div class="input-field">
    <label :for="name">
      {{ label }}
    </label>
    <input :type="type" :name="name" :id="name" :placeholder="placeholder"/>
  </div>
</template>

<script>
export default {
  name: "InputField",
  props: {
    type: {
      default: "text"
    },
    name: {
      default: "name"
    },
    label: {
      default: "Nome"
    },
    placeholder: {
      default: "Qual seu nome?"
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

    &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      font-size: 21px;
      color: $input;
    }
  }
}
</style>
