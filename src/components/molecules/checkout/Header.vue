<template>
  <nav>
    <ul>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </ul>
    <h1>header</h1>
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
  height: 100px;
  background-color: red;
  color: #fff;
}
ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: #fff;
}
</style>