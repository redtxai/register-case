<template>
  <div class="select">
    <label>
      {{ label }}
    </label>
    <p>
      <span>{{ getValue() }}</span>
      <span @click="showOptions = !showOptions">
        <img alt="Caret" :src="require('@/assets/images/caret.png')" />
      </span>
    </p>
    <ul v-if="showOptions">
      <li
        v-for="(item, index) in options"
        :key="index"
        @click="
          value = item;
          showOptions = !showOptions;
        "
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Select",
  props: {
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
      default: () => ["Comercial", "Entrevista", "Evento", "Café"]
    }
  },
  data() {
    return {
      value: "",
      showOptions: false
    };
  },
  methods: {
    getValue() {
      return this.value || this.placeholder;
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
      }
    }
  }
}
</style>
