import { getMenuCollections } from "@/services/mainNavigation/api";
import type { CollectionViewModel } from "@/services/mainNavigation/types";
import { readonly, ref } from "vue";

const collections = ref<CollectionViewModel[]>([]);
const isCollapsibleMenuVisible = ref<boolean>(false);

export const useMainNavigation = () => {
  const getCollections = async () => {
    try {
      const { data } = await getMenuCollections();
      collections.value = data.collections;
    } catch (err) {
      collections.value = [];
    }
  };
  const filterCollections = (filterBy: string): CollectionViewModel[] => {
    if (!filterBy.length) return [];
    return collections.value.filter((collection) =>
      collection.configuration_name.startsWith(filterBy.toLowerCase())
    );
  };
  return {
    filterCollections,
    getCollections,
    collectionsList: readonly(collections),
    isCollapsibleMenuVisible,
  };
};
