<template>
  <div class="btn">
    <button @click="$emit('handleClick')">{{ content }}</button>
  </div>
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
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
button {
  width: 100%;
  height: 100%;
  border: none;
  background-color: #fff;
  color: #000;
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;
}
</style>