import { createRouter, createWebHistory } from "vue-router";
import Collection from "@/domains/collection/pages/CollectionPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      redirect: "/collections/spectacles-women",
    },
    {
      path: "/collections/:collection",
      name: "Collection",
      component: Collection,
    },
  ],
});

export default router;
