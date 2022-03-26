<template>
  <section>
    <h1>Add Item</h1>
    <form @submit.prevent>
      <div class="input-group">
        <input type="date" v-model="userInput.date" />
      </div>

      <div class="input-group">
        <label for="content">
          <span class="material-icons adding-icon"> category </span>
        </label>
        <input
          type="text"
          id="content"
          placeholder="Item Content..."
          v-model="userInput.content"
        />
      </div>

      <div class="input-group">
        <label for="price">
          <span class="material-icons adding-icon"> paid </span>
        </label>
        <input
          type="number"
          min="0"
          id="price"
          placeholder="Item Price..."
          v-model="userInput.amount"
        />
      </div>
      <div class="radio-wrapper">
        <h3>Select Category:</h3>
        <div class="radio-group" v-for="item in getCategories" :key="item">
          <input
            type="radio"
            name="category"
            :id="item"
            :value="item"
            v-model="userInput.category"
          />
          <label :for="item">{{ item.toUpperCase() }}</label>
        </div>
      </div>
      <button @click="createItem">Complete</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      userInput: {
        content: "",
        category: "income",
        date: "",
        amount: 0,
        id: Math.floor(Date.now() / 1000),
        type: "income",
      },
    };
  },
  computed: {
    getCategories() {
      const obj = this.$store.state.icons;
      return Object.keys(obj);
    },
  },
  methods: {
    createItem() {
      if (this.userInput.category !== "income") {
        this.userInput.type = "expend";
      }
      console.log(this.userInput);
      console.log(typeof this.userInput.amount);
      this.userInput.amount = parseInt(this.userInput.amount);
      this.$store.commit("addNewItem", this.userInput);
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

h3 {
  margin-bottom: 1rem;
}

.input-group {
  position: relative;
  border: 1px solid red;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: $color-input-bg;
  border: 3px solid $color-input-border;
  padding: 0.5rem;
  border-radius: 5px;
  margin-top: 1.5rem;
  label {
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  input {
    width: 90%;
    font-size: 1.3rem;
    border: none;
    outline: none;
    background-color: $color-input-bg;
  }
  input::placeholder {
    color: $color-input-placeholder;
    font-style: italic;
  }
}

.adding-icon {
  font-size: 30px;
  color: #bcc9d6;
}

.radio-wrapper {
  margin-top: 1rem;
  margin-left: 3px;
}

.radio-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

button {
  width: 100%;
  background-color: $color-button-bg;
  color: white;
  border: none;
  width: 100%;
  text-align: center;
  cursor: pointer;
  margin-top: 1rem;
  padding: 0.75rem;
  font-size: 1.25rem;
  font-weight: 700;
}
</style>
