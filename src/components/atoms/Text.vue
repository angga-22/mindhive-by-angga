<template>
  <p :class="`fs-${fs}`">{{ content }}</p>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Text",
  props: {
    content: {
      type: String,
      required: true,
    },
    fs: {
      default: 16,
    },
  },
  setup() {
    const data = "home";
    return { data };
  },
});
</script>
<style scoped>
p {
  line-height: 0;
}
.fs-16 {
  font-size: 16px;
}
.fs-18 {
  font-size: 18px;
}
.fs-20 {
  font-size: 20px;
}
.fs-22 {
  font-size: 22px;
}
.fs-24 {
  font-size: 24px;
}
.fs-32 {
  font-size: 32px;
}
</style>