<template>
  <section>
    <shipping-info />
  </section>
</template>
<script>
import ShippingInfo from "../../molecules/checkout/ShippingInfo.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "ShippingForm",
  components: {
    ShippingInfo,
  },
  setup() {
    const data = "home";
    return { data };
  },
});
</script>
<style scoped>
section {
  width: 100%;
}
</style>