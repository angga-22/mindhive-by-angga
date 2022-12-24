<template>
  <div>
    <Text content="Payment Detail" fs="24" />
    <Field type="email" label="email" name="email" />
    <Field type="email" name="email" />
    <Field type="email" name="email" />
    <Button content="payment" />
  </div>
</template>
<script>
import { defineComponent } from "vue";
import Field from "@/components/atoms/Field.vue";
import Button from "@/components/atoms/Button.vue";
import Text from "@/components/atoms/Text.vue";
export default defineComponent({
  name: "PaymentDetail",
  components: {
    Field,
    Button,
    Text,
  },
  setup() {
    const data = "home";
    return { data };
  },
});
</script>
<style scoped>
</style>