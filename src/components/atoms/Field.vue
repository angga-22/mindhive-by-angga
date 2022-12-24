<template>
  <div>
    <label :for="name">{{ label }}</label>
    <input :name="name" :type="type" @change="$emit('handleChange')" />
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Field",
  props: {
    label: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  setup() {
    const data = "home";
    return { data };
  },
});
</script>
<style scoped>
input {
  padding: 0.5rem;
  margin: 0.5rem 0;
  height: 100%;
  border: none;
  background-color: #fff;
  color: #000;
  font-size: 1rem;
  cursor: pointer;
  /* // focus  */
  outline: none;
  border-radius: 0.2rem;
}

div {
  display: flex;
  flex-direction: column;
}
</style>