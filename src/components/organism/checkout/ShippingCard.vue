<template>
  <section>
    <Image :imgUrl="imgFile" alt="img" width="300" height="300" />
  </section>
</template>
<script>
import { defineComponent } from "vue";
import Image from "@/components/atoms/Image.vue";
import imgFile from "@/assets/images/img.jpg";
export default defineComponent({
  name: "ShippingCard",
  components: {
    Image,
  },
  setup() {
    const data = "home";
    return { data, imgFile };
  },
});
</script>
<style scoped>
section {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>