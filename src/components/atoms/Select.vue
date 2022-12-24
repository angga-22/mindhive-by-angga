<template>
  <div>
    <select v-model="shippingAddress">
      <option
        v-for="country in countries"
        :key="country.value"
        :value="country.value"
      >
        {{ country.label }}
      </option>
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
    const countries = [
      { value: "us", label: "United States" },
      { value: "id", label: "Indonesia" },
      { value: "aus", label: "Australia" },
      { value: "sg", label: "Singapore" },
    ];
    return { shippingAddress, countries };
  },
});
</script>
<style scoped>
select {
  padding: 0 0.3rem;
  margin: 0.5rem 0;
  width: 100%;
  height: 44px;
  border: none;
  background: #fff;
  outline: none;
  border-radius: 0.2rem;
}
option {
  height: 36px;
  border: none;
}
</style>