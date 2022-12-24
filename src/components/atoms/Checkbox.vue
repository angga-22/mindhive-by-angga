<template>
  <div>
    <input type="checkbox" name="checkbox" id="checkbox" />
    <label for="checkbox">{{ label }}</label>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Checkbox",
  props: {
    label: {
      type: String,
      default: "",
    },
  },
});
</script>
<style scoped>
div {
  display: flex;
  align-items: center;
  margin: 1rem 0;
}
input {
  margin-right: 0.5rem;
}
</style>