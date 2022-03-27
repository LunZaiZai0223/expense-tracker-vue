<template>
  <section>
    <base-modal v-if="isModalActive" @closeModal="closeModal">
      <template #header>
        <div class="modal-icon-wrapper">
          <span class="material-icons modal-icon">{{
            getIcons[modalData.category]
          }}</span>
        </div>
      </template>
      <template #body>
        <div class="modal-input-wrapper">
          <input
            type="text"
            :value="modalData.content"
            :readonly="!isModalEditing"
          />
        </div>
        <div class="modal-input-wrapper">
          <input
            type="date"
            :value="modalData.date"
            :readonly="!isModalEditing"
          />
        </div>
        <div class="modal-input-wrapper">
          <input
            type="number"
            :value="modalData.amount"
            :readonly="!isModalEditing"
            style="font-style: italic"
            :class="{
              'color-txt-saved': modalData.category === 'income',
              'color-txt-paid': modalData.category !== 'income',
            }"
          />
        </div>
      </template>
      <template #footer>
        <div class="modal-button-wrapper">
          <div class="modal-default-wrapper" v-if="!isModalEditing">
            <button class="modal-button-edit" @click="startModalEdit">
              Edit
            </button>
            <button class="modal-button-danger">Delete</button>
            <button class="modal-button-info" @click="closeModal">Back</button>
          </div>
          <div class="modal-edit-wrapper" v-if="isModalEditing">
            <button class="modal-button-normal" @click="endModalEdit">
              Save
            </button>
            <button class="modal-button-info" @click="endModalEdit">
              Back
            </button>
          </div>
        </div>
      </template>
    </base-modal>
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
        <div class="icon-wrapper" @click="openModal(id)">
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
import BaseModal from "./UI/BaseModal.vue";

const findItem = (dataList, id) => {
  return dataList.filter((dataItem) => dataItem.id === id);
};

export default {
  components: {
    "base-item-card": BaseItemCard,
    "filter-item-form": FilterItemForm,
    "base-modal": BaseModal,
  },
  emits: ["startFilter", "endFilter"],
  data() {
    return {
      isFilter: false,
      filterList: [],
      isModalActive: true,
      isModalEditing: false,
      modalData: [],
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
    closeModal() {
      console.log("hit close model");
      this.isModalActive = false;
    },
    openModal(id) {
      console.log("hit open modal");
      this.isModalActive = true;
      const [foundItem] = findItem(this.getList, id);
      this.modalData = foundItem;
      console.log(foundItem);
    },
    startModalEdit() {
      this.isModalEditing = true;
    },
    endModalEdit() {
      this.isModalEditing = false;
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
    cursor: pointer;
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
  font-weight: 700;
}

.color-txt-saved {
  color: $color-txt-saved;
  font-weight: 700;
}

.no-result {
  font-style: italic;
  color: $color-txt-grey;
  text-align: center;
  margin-top: 1.5rem;
}

.modal-icon-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 5px;
  background-color: $color-icon-wrapper;
}

.modal-icon {
  font-size: 35px;
  color: $color-icon;
}

.modal-input-wrapper {
  margin-bottom: 1rem;
  input {
    padding-bottom: 0.5rem;
    font-size: 1rem;
    outline: none;
    border: none;
    border-bottom: 1px solid Black;
    &:read-only {
      border: none;
    }
  }
}

.modal-button-wrapper {
  margin-top: 1.5rem;
  button {
    border: none;
    padding: 0.75rem;
    cursor: pointer;
    border-radius: 5px;
    color: White;
  }
  .modal-button-normal {
    background-color: $color-button-bg;
  }
  .modal-button-danger {
    background-color: $color-button-bg-danger;
  }
  .modal-button-info {
    background-color: $color-button-bg-light;
  }
  .modal-button-edit {
    background-color: $color-button-bg-edit;
  }
}

.modal-default-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    width: calc((100% / 3) - 15px);
  }
}

.modal-edit-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    width: calc((100% / 2) - 30px);
  }
}
</style>
