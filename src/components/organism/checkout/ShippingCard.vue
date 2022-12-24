<template>
  <section>
    <Image :imgUrl="imgFile" alt="img" width="300" height="300" />
    <Text content="Groceries" fs="16" />
    <Text content="S$ 5000" fs="32" />
  </section>
</template>
<script>
import { defineComponent } from "vue";
import Image from "@/components/atoms/Image.vue";
import imgFile from "@/assets/images/img.jpg";
import Text from "@/components/atoms/Text.vue";
export default defineComponent({
  name: "ShippingCard",
  components: {
    Image,
    Text,
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
  flex-direction: column;
}
</style>