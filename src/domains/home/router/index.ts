import type { RouteRecordRaw } from "vue-router";

export const homeRouter: Array<RouteRecordRaw> = [
  {
    path: "/home",
    name: "home",
    component: () => {
      return import("../pages/HomePage.vue");
    },
  },
];
