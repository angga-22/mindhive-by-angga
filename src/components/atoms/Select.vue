<template>
  <div>
    <select v-model="shippingAddress">
      <option value="us">United States</option>
      <option value="id">Indonesia</option>
      <option value="aus">Australia</option>
      <option value="sg">Singapore</option>
    </select>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "Select",
  props: {
    label: {
      type: String,
      default: "",
    },
  },
  setup() {
    const shippingAddress = ref("us");
    return { shippingAddress };
  },
});
</script>
<style scoped>
select {
  padding: 0 0.3rem;
  margin: 0.5rem 0;
  width: 100%;
  height: 36px;
  border: none;
  background: #fff;
  outline: none;
  border-radius: 0.2rem;
}
option {
  width: 50%;
  height: 36px;
  border: none;
}
</style>