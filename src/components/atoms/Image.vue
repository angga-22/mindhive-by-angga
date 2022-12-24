<template>
  <div>
    <img :src="imgUrl" :alt="alt" :width="width" :height="height" />
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Image",
  props: {
    imgUrl: {
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    width: {
      default: 100,
    },
    height: {
      default: 100,
    },
  },
  setup() {
    const data = "home";
    return { data };
  },
});
</script>
<style scoped>
</style>