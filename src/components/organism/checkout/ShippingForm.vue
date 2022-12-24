<template>
  <div>
    <shipping-info />
    <payment-detail />
  </div>
</template>
<script>
import ShippingInfo from "../../molecules/checkout/ShippingInfo.vue";
import PaymentDetail from "../../molecules/checkout/PaymentDetail.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "ShippingForm",
  components: {
    PaymentDetail,
    ShippingInfo,
  },
  setup() {
    const data = "home";
    return { data };
  },
});
</script>
<style scoped>
div {
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
</style>