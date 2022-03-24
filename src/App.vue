<template>
  <div id="app">
    <!-- <nav> -->
    <!--   <router-link to="/">Home</router-link> | -->
    <!--   <router-link to="/about">About</router-link> -->
    <!-- </nav> -->
    <!-- <router-view /> -->
    <main>
      <the-header></the-header>
      <section class="content">
        <button-list></button-list>
        <the-form></the-form>
        <router-view></router-view>
      </section>
    </main>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheForm from "./components/TheForm.vue";
import ButtonList from "./components/ButtonList.vue";

export default {
  components: {
    "the-header": TheHeader,
    "the-form": TheForm,
    "button-list": ButtonList,
  },
  created() {
    this.$store.dispatch("fetchData");
  },
};
</script>

<style lang="scss">
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

main {
  width: 500px;
  margin: 0 auto;
  padding: 50px 0;
  border-radius: 3px;
}

.content {
  background-color: white;
  padding: 1.5rem;
}
</style>
