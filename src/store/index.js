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

Vue.use(Vuex);

// const icons = {
//   medical: 'healing',
//   shopping: 'shopping_cart',
//   food: 'restaurant',
//   other: 'dynamic_feed',
//   income: 'savings',
// };

// 靠著更改 state 後新增新的 pair？

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
      // amount: 0
      // category: "income"
      // content: ""
      // date: ""
      // id: 1648203005
      // type: "income"
      const { type } = payload;
      console.log(type);
      // TODO: 思考解構
      // const a = [{x: 1}, {y: 2}, {z: 3}];
      // const [r, t, y] = a;
      // r.x = 2;
      // console.log(a) => [{x: 2}, {y: 2}, {z:3}]
      // 第一關 expend / income
      // 第二關 推入 items
      // 第三關 再寫新的任務更新總額
      const wrapper = state.dataBase[type];
      console.log(wrapper);
      unshiftNewItem(wrapper, payload);
      console.log(state.dataBase[type]);
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
