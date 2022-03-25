<template>
  <section>
    <h1>Check Items</h1>
    <filter-item-form
      :isFilter="isFilter"
      @startFilter="startFilter"
      @endFilter="endFilter"
    ></filter-item-form>
    <ul v-if="isFilter === false">
      <base-item-card
        v-for="{ id, content, category, amount, date } in getList"
        :key="id"
      >
        <div class="icon-wrapper">
          <span class="material-icons icon">{{ getIcons[category] }}</span>
        </div>
        <div class="content-wrapper">
          <p>{{ content }}</p>
          <p>{{ date }}</p>
          <p
            class="content-amount"
            :class="{
              'color-txt-paid': category !== 'income',
              'color-txt-saved': category === 'income',
            }"
          >
            $ {{ amount }}
          </p>
        </div>
      </base-item-card>
    </ul>
    <ul v-if="isFilter">
      <p>現在在 filter 中</p>

      <p class="no-result" v-if="filterList.length === 0">No Result</p>
      <base-item-card
        v-for="{ id, content, category, amount, date } in filterList"
        :key="id"
      >
        <div class="icon-wrapper">
          <span class="material-icons icon">{{ getIcons[category] }}</span>
        </div>
        <div class="content-wrapper">
          <p>{{ content }}</p>
          <p>{{ date }}</p>
          <p
            class="content-amount"
            :class="{
              'color-txt-paid': category !== 'income',
              'color-txt-saved': category === 'income',
            }"
          >
            $ {{ amount }}
          </p>
        </div>
      </base-item-card>
    </ul>
  </section>
</template>

<script>
import BaseItemCard from "./UI/BaseItemCard.vue";
import FilterItemForm from "./FilterItemForm.vue";

export default {
  components: {
    "base-item-card": BaseItemCard,
    "filter-item-form": FilterItemForm,
  },
  emits: ["startFilter", "endFilter"],
  data() {
    return {
      isFilter: false,
      filterList: [],
    };
  },
  computed: {
    getList() {
      const { expend, income } = this.$store.state.dataBase;
      const expendItems = expend.items;
      const incomeItems = income.items;
      const onlyItems = expendItems.concat(incomeItems);
      return onlyItems;
    },
    getIcons() {
      return this.$store.state.icons;
    },
  },
  methods: {
    startFilter(dateValue) {
      console.log("in parent component start filter");
      if (!dateValue) {
        console.log("no date input");
        return;
      }

      this.isFilter = true;
      const list = this.getList;
      this.filterList = list.filter((item) => item.date === dateValue);
    },
    endFilter() {
      console.log("in parent component end filter");
      this.isFilter = false;
      this.filterList = [];
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
  color: #385e72;
  &-wrapper {
    width: 12%;
    height: 50px;
    background-color: #d9e4ec;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.content-wrapper {
  width: 88%;
  font-size: 1rem;
  position: relative;
}

.content-amount {
  position: absolute;
  right: 0;
  bottom: 0;
  transform: translateY(-50%);
}

.color-txt-paid {
  color: $color-txt-paid;
}

.color-txt-saved {
  color: $color-txt-saved;
}

.no-result {
  font-style: italic;
  color: $color-txt-grey;
  text-align: center;
  margin-top: 1.5rem;
}
</style>
