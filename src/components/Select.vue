<template>
  <div class="select">
    <label>
      {{ label }}
    </label>
    <p @click="showOptions = !showOptions">
      <span>{{ getValue() }}</span>
      <span>
        <img alt="Caret" :src="require('@/assets/images/caret.png')" />
      </span>
    </p>
    <ul v-if="showOptions">
      <li v-for="(item, index) in options" :key="index" @click="setValue(item)">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Select",
  props: {
    value: {
      default: ""
    },
    name: {
      default: "visit"
    },
    label: {
      default: "Visita"
    },
    placeholder: {
      default: "A sua visita é"
    },
    options: {
      default: () => []
    }
  },
  data() {
    return {
      showOptions: false
    };
  },
  methods: {
    getValue() {
      return this.value || this.placeholder;
    },
    setValue(val) {
      this.showOptions = !this.showOptions;
      this.$emit("input", val);
    }
  }
};
</script>

<style lang="scss" scoped>
.select {
  position: relative;
  width: 100%;
  height: 60px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  font-weight: 400;
  text-align: left;

  border-bottom: 1px solid $border-input;

  label {
    color: $label;
    font-size: 15px;
    line-height: 20px;
    height: 20px;
    text-align: left;
  }

  p {
    width: 100%;
    height: 40px;

    display: flex;
    justify-content: space-between;

    line-height: 40px;
    margin: 0;
    font-size: 21px;
    color: $input;

    span {
      vertical-align: middle;
    }

    img {
      vertical-align: middle;
      width: 13px;
      height: 9px;
    }
  }

  ul {
    position: absolute;
    top: 60px;
    left: 0;
    z-index: 5;
    border: 1px solid $border-input;

    margin: 0;
    padding: 0;
    list-style: none outside none;

    width: 100%;

    li {
      width: 100%;
      box-sizing: border-box;
      height: 50px;
      line-height: 50px;
      padding: 0 25px;

      background: white;

      &:hover,
      &:focus,
      &:active {
        background: $list-hover;
        cursor: pointer;
      }
    }
  }
}
</style>
