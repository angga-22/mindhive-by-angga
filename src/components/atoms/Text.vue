<template>
  <div></div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Text",
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
<style lang="">
</style>