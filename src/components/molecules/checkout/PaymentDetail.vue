<template>
  <div>
    <Field type="email" label="email" name="email" />
    <Field type="email" label="email" name="email" />
  </div>
</template>
<script>
import { defineComponent } from "vue";
import Field from "@/components/atoms/Field.vue";
export default defineComponent({
  name: "PaymentDetail",
  props: {
    content: {
      type: String,
      required: true,
    },
  },
  components: {
    Field,
  },
  setup() {
    const data = "home";
    return { data };
  },
});
</script>
<style scoped>
</style>