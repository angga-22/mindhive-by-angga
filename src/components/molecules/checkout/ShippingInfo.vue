<template>
  <div>
    <Button content="Payment" />
    <div class="horizontal-line">
      <div class="line"></div>
      <Text content="Or pay with card" fs="16" />
      <div class="line"></div>
    </div>
    <Text content="Shipping Information" fs="24" />
    <Field type="email" label="Email" name="email" placeholder="Your Email" />
    <Select />
    <Field type="text" name="shippingName" placeholder="Name" />
    <Field type="text" name="shippingAddress" placeholder="Address" />
  </div>
</template>
<script>
import { defineComponent } from "vue";
import Field from "@/components/atoms/Field.vue";
import Text from "@/components/atoms/Text.vue";
import Button from "@/components/atoms/Button.vue";
import Select from "@/components/atoms/Select.vue";
export default defineComponent({
  name: "ShippingInfo",
  components: {
    Field,
    Text,
    Select,
    Button,
  },
  setup() {
    const data = "home";
    return { data };
  },
});
</script>
<style scoped>
.horizontal-line {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}
.line {
  width: 30%;
  height: 2px;
  background-color: #dadada;
  margin: 0 auto;
}
</style>