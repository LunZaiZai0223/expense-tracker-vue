import Vue from "vue";
import VueRouter from "vue-router";
// import HomeView from "../views/HomeView.vue";

// needed
import AddItem from "../components/AddItem.vue";
import CheckItem from "../components/CheckItem.vue";
import CheckDiagram from "../components/CheckDiagram.vue";
import CheckCategories from "../components/CheckCategories.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: HomeView,
  // },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
  {
    path: "/add-item",
    name: "add-item",
    component: AddItem,
  },
  {
    path: "/check-item",
    name: "check-item",
    component: CheckItem,
  },
  {
    path: "/check-diagram",
    name: "check-diagram",
    component: CheckDiagram,
  },
  {
    path: "/check-categories",
    name: "check-categories",
    component: CheckCategories,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
