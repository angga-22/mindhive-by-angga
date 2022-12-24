<template>
  <div>
    <img :src="imgUrl" :alt="alt" />
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
  },
  setup() {
    const data = "home";
    return { data };
  },
});
</script>
<style scoped>
img {
  width: 100%;
  height: 100%;
}
</style>