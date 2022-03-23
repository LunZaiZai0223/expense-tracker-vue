<template>
  <div id="app">
    <!-- <nav> -->
    <!--   <router-link to="/">Home</router-link> | -->
    <!--   <router-link to="/about">About</router-link> -->
    <!-- </nav> -->
    <!-- <router-view /> -->
    <section>
      <the-header></the-header>
    </section>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
export default {
  components: {
    "the-header": TheHeader,
  },
};
</script>

<style lang="scss">
// font
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap");

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  width: 100%;
  height: 100%;
}

body {
  background-color: $color-bg;
  font-family: "Inter", sans-serif;
}

section {
  width: 500px;
  margin: 0 auto;
  padding: 50px 0;
  border-radius: 3px;
}
</style>
