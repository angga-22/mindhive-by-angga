<template>
  <div>
    <Text content="Payment Detail" fs="24" />
    <Field
      type="text"
      label="Card Information"
      name="cardNo"
      placeholder="1234 1234 1234 1234"
      :cardNumber="true"
    />
    <div class="separator">
      <Field
        type="text"
        name="expirationCard"
        placeholder="MM / YY"
        :cardMonth="true"
      />
      <Field type="text" name="cvvCard" placeholder="CVV" :cardCvv="true" />
    </div>
    <Checkbox label="Billing address is same as shipping" />
    <Button content="Payment" />
  </div>
</template>
<script>
import { defineComponent } from "vue";
import Field from "@/components/atoms/Field.vue";
import Button from "@/components/atoms/Button.vue";
import Text from "@/components/atoms/Text.vue";
import Checkbox from "@/components/atoms/Checkbox.vue";
import { stripe } from "@/services/libs";
export default defineComponent({
  name: "PaymentDetail",
  components: {
    Field,
    Button,
    Text,
    Checkbox,
  },
  setup() {
    return { stripe };
  },
});
</script>
<style scoped>
.separator {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
@media screen and (max-width: 768px) {
  .separator {
    flex-direction: column;
    width: 100%;
  }
}
</style>