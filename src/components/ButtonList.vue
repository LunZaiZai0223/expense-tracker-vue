<template>
  <section>
    <ul>
      <button-item v-for="item in buttonItems" :key="item.title">
        <router-link :to="{ path: item.pathName }" class="wrapper">
          <span class="material-icons nav-more-icon"> more_horiz </span>
          <div class="nav-line" :style="{ backgroundColor: item.color }"></div>
          <p class="l-mt-1">{{ item.title }}</p>
        </router-link>
      </button-item>
    </ul>
  </section>
</template>
<script>
import ButtonItem from "./ButtonItem.vue";

export default {
  components: {
    "button-item": ButtonItem,
  },
  data() {
    return {
      buttonItems: [
        { title: "Add Items", color: "#679CF4", pathName: "add-item" },
        {
          title: "Check Categories",
          color: "#E0B0B4",
          pathName: "check-categories",
        },
        { title: "Check Items", color: "#77EADB", pathName: "check-item" },
        { title: "Check Diagram", color: "#E4CCFA", pathName: "check-diagram" },
      ],
    };
  },
  methods: {
    handleClick() {
      console.log("hit");
      this.$router.push("hello");
    },
  },
};
</script>

<style scoped lang="scss">
ul {
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem 1.5rem;
  margin-bottom: 1.75rem;
}

.nav-more-icon {
  align-self: end;
  color: #babdc0;
}

.nav-line {
  width: 40%;
  height: 5px;
  background-color: red;
  border-radius: 3px;
}

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding-bottom: 1rem;
  padding-right: 0.5rem;
  padding-left: 1.5rem;
  gap: 0.25rem;
  cursor: pointer;
  box-shadow: 0.5px 0.5px 5px #babdc0;
  text-decoration: none;
  color: Black;
}
</style>
