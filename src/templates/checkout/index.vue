<template>
  <section>
    <Header />
    <div>
      <shipping-card />
      <shipping-form />
    </div>
  </section>
</template>
<script>
import { defineComponent } from "vue";
import ShippingCard from "@/components/organism/checkout/ShippingCard.vue";
import ShippingForm from "@/components/organism/checkout/ShippingForm.vue";
import Header from "@/components/molecules/checkout/Header.vue";
export default defineComponent({
  name: "Checkout",
  components: {
    ShippingCard,
    ShippingForm,
    Header,
  },
  setup() {
    const data = "home";
    return { data };
  },
});
</script>
<style scoped>
section {
  width: 90%;
  margin: 0 auto;
  padding-bottom: 4rem;
  background: rgb(232, 232, 241);
  border-radius: 1rem;
}
div {
  display: flex;
}
</style>