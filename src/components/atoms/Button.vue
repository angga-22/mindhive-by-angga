<template>
  <button @click="$emit('handleClick')">
    <Text :content="content" :fs="16" />
  </button>
</template>
<script>
import { defineComponent } from "vue";
import Text from "./Text.vue";
export default defineComponent({
  name: "Button",
  components: {
    Text,
  },
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
  border-radius: 0.2rem;
  margin: 0 auto;
  background-color: rgb(32, 32, 32);
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;
}
</style>