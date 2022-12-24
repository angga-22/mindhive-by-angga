<template>
  <main>
    <h1>{{ data }}</h1>
  </main>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "HomeView",
  setup() {
    const data = "home";
    return { data };
  },
});
</script>
