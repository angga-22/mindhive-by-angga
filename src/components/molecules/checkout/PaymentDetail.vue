<template>
  <div>
    <Text content="Payment Detail" fs="24" />
    <Field
      type="number"
      label="Card Information"
      name="cardNo"
      placeholder="1234 1234 1234 1234"
    />
    <div class="separator">
      <Field type="number" name="expirationCard" placeholder="MM / YY" />
      <Field type="number" name="cvvCard" placeholder="CVC" />
    </div>
    <Checkbox label="Billing address is same as shipping" />
    <Button content="payment" />
  </div>
</template>
<script>
import { defineComponent } from "vue";
import Field from "@/components/atoms/Field.vue";
import Button from "@/components/atoms/Button.vue";
import Text from "@/components/atoms/Text.vue";
import Checkbox from "@/components/atoms/Checkbox.vue";
export default defineComponent({
  name: "PaymentDetail",
  components: {
    Field,
    Button,
    Text,
    Checkbox,
  },
  setup() {
    const data = "home";
    return { data };
  },
});
</script>
<style scoped>
.separator {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>