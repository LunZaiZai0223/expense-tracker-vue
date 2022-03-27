import Vue from "vue";
import Vuex from "vuex";

const dataRefactor = (data) => {
  const newData = data.map((item) => {
    const { type, content } = item;
    if (type === "expend" && content === "我是記帳內容") {
      item.category = "other";
      return item;
    }
    if (type === "expend") {
      item.category = "food";
      return item;
    }
    if (type === "income") {
      item.category = "income";
      return item;
    }
  });
  return newData.reverse();
};

// 給 check categories component 用的資料
// {categoryName: amount of the category}
const categoryPairCreator = (state, type) => {
  return state.dataBase[type].items.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue.category]) {
      accumulator[currentValue.category] += currentValue.amount;
    } else {
      accumulator[currentValue.category] = currentValue.amount;
    }
    return accumulator;
  }, {});
};

const unshiftNewItem = (wrapper, payload) => {
  wrapper.items.unshift(payload);
};

const updateTotalCount = (wrapper) => {
  const result = wrapper.items.reduce(
    (accumulator, currentValue) => (accumulator += currentValue.amount),
    0
  );
  wrapper.total = result;
};

const getStateWrapper = (state, category) => {
  return state.dataBase[category];
};

const getStateOuterKey = (category) => {
  return category === "income" ? "income" : "expend";
};

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dataBase: {
      expend: {
        // 放類別名稱
        categories: [],
        total: 0,
        // content, category, amount, date, id
        items: [],
      },
      income: {
        categories: [],
        total: 0,
        items: [],
      },
    },

    icons: {
      medicine: "healing",
      shopping: "shopping_cart",
      food: "restaurant",
      other: "dynamic_feed",
      living: "living",
      // 除了 income 其他都是 expend
      income: "savings",
    },
  },
  getters: {
    totalCalculator(state) {
      return state.dataBase.income.total - state.dataBase.expend.total;
    },
    incomeCalculator(state) {
      console.log("incomeCalculator");
      return state.dataBase.income.items.reduce((accumulator, currentValue) => {
        accumulator += currentValue.amount;
        return accumulator;
      }, 0);
    },
    expendCalculator(state) {
      return state.dataBase.expend.items.reduce((accumulator, currentValue) => {
        accumulator += currentValue.amount;
        return accumulator;
      }, 0);
    },
    getItemsQty(state) {
      return (
        state.dataBase.expend.items.length + state.dataBase.income.items.length
      );
    },
    // {category, amount}
    getCategoryPair(state) {
      console.log("hit getCategoryPair");
      const combinedItems = state.dataBase.expend.items.concat(
        state.dataBase.income.items
      );
      console.log(combinedItems);

      const expendPair = categoryPairCreator(state, "expend");
      const incomePair = categoryPairCreator(state, "income");

      console.log(expendPair);
      console.log(incomePair);
      console.log(Object.assign({}, expendPair, incomePair));
      // const resultObj = { list: Object.assign({}, expendPair, incomePair) };
      const resultObj = Object.assign({}, expendPair, incomePair);
      console.log(resultObj);
      return resultObj;
    },
    // 更新 vuex 的 state，所以會觸發 getters，由 vuex getters 傳資料給 component
    // 目前沒使用，filter 後刪除資料是更新 component 自己 filter 出來的 state
    // filterItem(state) {
    //   return (date) => {
    //     const expendData = state.dataBase.expend.items;
    //     const incomeData = state.dataBase.income.items;
    //     const combined = expendData.concat(incomeData);
    //     const result = combined.filter((item) => item.date === date);
    //     return result;
    //   };
    // },
  },
  mutations: {
    initDataBaseData(state, payload) {
      console.log("only test");

      payload.forEach((single) => {
        const { amount, category, content, date, id, type } = single;
        console.log(amount, category, content, date, id, type);

        // 整理 categories
        if (state.dataBase[type].categories.indexOf(category) === -1) {
          state.dataBase[type].categories.push(category);
        }

        // 整理 items
        const tempObj = {
          id,
          content,
          category,
          amount,
          date,
        };
        state.dataBase[type].items.push(tempObj);

        // 計算總額
        state.dataBase[type].total = state.dataBase[type].items.reduce(
          (accumulator, currentValue) => (accumulator += currentValue.amount),
          0
        );
      });
      console.log(state.dataBase);
    },
    addNewItem(state, payload) {
      const { type } = payload;
      console.log(type);
      // 第一關 expend / income
      // 第二關 推入 items
      // 第三關 再寫新的任務更新總額
      const wrapper = state.dataBase[type];
      console.log(wrapper);
      unshiftNewItem(wrapper, payload);
      console.log(state.dataBase[type]);
      updateTotalCount(wrapper);
    },
    // 刪除 item
    //   HOW:
    //     1. 點擊知道 ID
    //     2. 除了 income 其餘都是 expend
    //     3. updateTotalCount 的 param 就是進入 expend / income 的 value
    //     4. 刪除 state 的資料 -> 呼叫 updateTotalCount 更改該類別（expend / income）的 total 值
    deleteItem(state, payload) {
      console.log("hit delete in store");
      const { id, category } = payload;
      const dataBaseOuterKey = getStateOuterKey(category);
      // const wrapper = state.dataBase[dataBaseOuterKey];
      const wrapper = getStateWrapper(state, dataBaseOuterKey);
      const filter = wrapper.items.filter((item) => item.id !== id);
      wrapper.items = filter;
      updateTotalCount(wrapper);
    },
    updateItem(state, { modalData, newInput }) {
      console.log("hit update in vuex");
      const { category, id } = modalData;
      const dataBaseOuterKey = getStateOuterKey(category);
      const wrapper = getStateWrapper(state, dataBaseOuterKey);
      // 用 filter 找出要的資料，目的只有找出後用 splice 更改值，所以不需要回傳
      wrapper.items.filter((item, index, arraySelf) => {
        if (item.id === id) {
          arraySelf.splice(index, 1, newInput);
          return item;
        }
      });
      updateTotalCount(wrapper);
    },
  },
  actions: {
    fetchData(context) {
      console.log("hello");
      fetch("https://my-json-server.typicode.com/maxhyun/jsonDB/posts")
        .then((response) => response.json())
        .then((data) => {
          console.log("got here?");
          const mapping = dataRefactor(data);
          context.commit("initDataBaseData", mapping);
        });
    },
  },
  modules: {},
});
