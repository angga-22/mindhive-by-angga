<template>
  <nav>
    <ul>
      <li>
        <a href="#">Back</a>
      </li>
    </ul>
  </nav>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Header",
  setup() {
    const data = "home";
    return { data };
  },
});
</script>
<style scoped>
nav {
  width: 100%;
  color: #fff;
  padding: 1rem 0;
}

li {
  list-style: none;
}
a {
  text-decoration: none;
  color: rgb(61, 61, 61);
  font-weight: bold;
}
</style>