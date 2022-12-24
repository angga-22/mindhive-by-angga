<template>
  <main>
    <Home />
  </main>
</template>
<script>
import Home from "./views/HomeView.vue";
export default {
  setup() {
    const data = "test";
    return { data };
  },
  components: {
    Home,
  },
};
</script>

