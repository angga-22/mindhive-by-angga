<template>
  <main>
    <checkout />
  </main>
</template>
<script>
import { defineComponent } from "vue";
import ShippingForm from "@/components/organism/checkout/ShippingForm.vue";
import Checkout from "@/templates/checkout/index.vue";
export default defineComponent({
  name: "HomeView",
  components: {
    ShippingForm,
    Checkout,
  },
  setup() {
    const data = "home";
    return { data };
  },
});
</script>
<style scoped>
main {
  width: 100%;
  display: flex;
  align-items: center;
}
</style>
