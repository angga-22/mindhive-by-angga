<template>
  <button @click="$emit('handleClick')">{{ content }}</button>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Button",
  props: {
    content: {
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
button {
  width: 100%;
  border: none;
  margin: 0 auto;
  background-color: rgb(32, 32, 32);
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;
}
</style>