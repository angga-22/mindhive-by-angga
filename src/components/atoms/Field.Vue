<template>
  <div>
    <input :type="type" @change="$emit('handleChange')" />
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Field",
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
input {
  width: 44px;
  height: 100%;
  border: none;
  background-color: #fff;
  color: #000;
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;
}
</style>