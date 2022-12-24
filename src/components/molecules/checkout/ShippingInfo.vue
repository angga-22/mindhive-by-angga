<template>
  <div>
    <Button content="payment" />
    <Text content="Shipping Information" fs="24" />
    <Field type="email" label="email" name="ema0il" />
    <Field type="email" name="email" />
  </div>
</template>
<script>
import { defineComponent } from "vue";
import Field from "@/components/atoms/Field.vue";
import Text from "@/components/atoms/Text.vue";
import Button from "@/components/atoms/Button.vue";
export default defineComponent({
  name: "ShippingInfo",
  components: {
    Field,
    Text,
    Button,
  },
  setup() {
    const data = "home";
    return { data };
  },
});
</script>
<style scoped>
</style>