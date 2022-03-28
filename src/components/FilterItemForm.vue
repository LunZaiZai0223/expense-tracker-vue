<template>
  <div>
    <form @submit.prevent ref="dateForm">
      <div>
        <input type="date" ref="dateInput" />
      </div>
      <button type="submit" @click="handleFilterClick($refs.dateInput.value)">
        Filter
      </button>
    </form>
    <div class="reset">
      <span @click="resetForm"> Reset Filter </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["isFilter"],
  methods: {
    handleFilterClick(dateValue) {
      console.log("clicked the filter button");
      this.$emit("startFilter", dateValue);
    },
    resetForm() {
      this.$refs.dateForm.reset();
      this.$emit("endFilter");
    },
  },
  mounted() {
    console.log(this.isFilter);
  },
};
</script>

<style scoped lang="scss">
div {
  position: relative;
}

input[type="date"] {
  font-size: 1.3em;
  border: none;
  outline: none;
  background-color: $color-input-bg;
  padding: 0.75rem;
  width: 100%;
  border-radius: 5px;
}

button[type="submit"] {
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

.reset {
  display: flex;
  justify-content: flex-end;
  span {
    margin-top: 0.75rem;
    background-color: $color-button-bg-light;
    padding: 0.5rem 0.75rem;
    color: white;
    font-weight: 700;
    cursor: pointer;
  }
}
</style>
