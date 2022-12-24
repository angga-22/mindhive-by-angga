<template>
  <main>
    <header />
    <section>
      <shipping-card />
      <shipping-form />
    </section>
  </main>
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
  width: 100%;
  background: blue;
  display: flex;
}
</style>