<template>
  <section>
    <h1>Check Categories</h1>
    <ul>
      <base-category-card v-for="(item, key) in getCategoryPair" :key="key">
        <div class="icon-wrapper">
          <span class="material-icons icon"> {{ getIcons[key] }} </span>
        </div>
        <div>
          <p>{{ key.toUpperCase() }}</p>
          <p class="amount">$ {{ item }}</p>
        </div>
      </base-category-card>
    </ul>
  </section>
</template>

<script>
import BaseCategoryCard from "./UI/BaseCategoryCard.vue";

export default {
  components: {
    "base-category-card": BaseCategoryCard,
  },
  computed: {
    getCategoryPair() {
      console.log(this.$store.getters.getCategoryPair);
      return this.$store.getters.getCategoryPair;
    },
    getIcons() {
      console.log(this.$store.state.icons);
      return this.$store.state.icons;
    },
  },
};
</script>

<style scoped lang="scss">
h1 {
  margin-bottom: 1rem;
  font-size: 1.5rem;
  text-align: center;
}

ul {
  list-style-type: none;
}

.icon {
  font-size: 35px;
  color: $color-icon;
  &-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 65px;
    height: 65px;
    border-radius: 5px;
    background-color: $color-icon-wrapper;
  }
}

.amount {
  font-weight: 700;
  margin-top: 0.25rem;
  font-style: italic;
}
</style>
