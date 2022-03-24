<template>
  <header>
    <h1>My Expense Tracker</h1>
    <div>
      <div class="user-info">
        <div class="user-avatar"></div>
        <div>
          <h3>Lun</h3>
          <span class="record-counter">Current Items: {{ getItemsQty }}</span>
        </div>
      </div>
      <div class="expense-result">
        <span class="expense-result-title">In Total</span>
        <h2
          class="expense-result-content"
          :class="{
            'color-txt-paid': totalCalculator < 0,
            'color-txt-saved': totalCalculator > 0,
          }"
        >
          $ {{ totalCalculator }}
        </h2>
        <div class="expense-result-count">
          <h4 class="color-txt-paid">
            <span class="material-icons"> paid </span>- {{ expendCalculator }}
          </h4>
          <h4 class="color-txt-saved">
            <span class="material-icons"> savings </span> +
            {{ incomeCalculator }}
          </h4>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    totalCalculator() {
      return this.$store.getters.totalCalculator;
    },
    incomeCalculator() {
      return this.$store.getters.incomeCalculator;
    },
    expendCalculator() {
      return this.$store.getters.expendCalculator;
    },
    getItemsQty() {
      return this.$store.getters.getItemsQty;
    },
  },
};
</script>

<style scoped lang="scss">
header {
  background-color: $color-header;
  padding: 1.5rem;
}

h1 {
  text-align: center;
  font-size: 2rem;
}

.record-counter {
  color: $color-txt-grey;
}

.user-info {
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;
  align-items: center;
}

.user-avatar {
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt2ktjWUUxRS9hxCb_gB7Yf3wrIkj_UByCYQ&usqp=CAU");
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.expense-result {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin-top: 1.25rem;
  padding: 1rem;
  &-title {
    color: $color-txt-grey;
  }
  &-content {
    font-size: 3.5rem;
  }
  &-count {
    display: flex;
    align-items: center;
    width: 65%;
    justify-content: space-between;
    margin-top: 0.5rem;
    h4 {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
}

.color-txt-paid {
  color: $color-txt-paid;
}

.color-txt-saved {
  color: $color-txt-saved;
}
</style>
