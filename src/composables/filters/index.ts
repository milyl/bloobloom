import { readonly, reactive, computed, ref } from "vue";
import type {
  ActiveFilterType,
  AvailableFiltersType,
  FilterTypes,
} from "./types";
const filters: AvailableFiltersType[] = [
  {
    type: "colour",
    options: ["black", "tortoise", "coloured", "crystal", "dark", "bright"],
  },
  {
    type: "shape",
    options: ["square", "rectangle", "round", "cat-eye"],
  },
];
const activeFilter = reactive<ActiveFilterType>({
  colour: [],
  shape: [],
});

const isFilterBarVisible = ref<boolean>(false);

export const useFilters = () => {
  const _deleteFilter = (filterType: FilterTypes, index: number) => {
    activeFilter[filterType].splice(index, 1);
  };
  const _addFilter = (filterType: FilterTypes, filterOption: string) =>
    activeFilter[filterType].push(filterOption);
  const setActiveFilter = (filterType: FilterTypes, filterOption: string) => {
    const index = activeFilter[filterType].findIndex(
      (option) => option === filterOption
    );
    if (index !== -1) {
      _deleteFilter(filterType, index);
    } else {
      _addFilter(filterType, filterOption);
    }
  };

  const getFiltersForQuery = computed(() => {
    let filterQuery: any = [];
    for (const [key, value] of Object.entries(activeFilter)) {
      if (key === "colour") {
        value.forEach((option: string) => {
          filterQuery = [
            ...filterQuery,
            `filters[glass_variant_frame_variant_colour_tag_configuration_names][]=${option}`,
          ];
        });
      }

      if (key === "shape") {
        value.forEach((option: string) => {
          filterQuery = [
            ...filterQuery,
            `filters[glass_variant_frame_variant_frame_tag_configuration_names][]=${option}`,
          ];
        });
      }
    }
    return filterQuery.join("&");
  });

  const isFilterActive = (
    filterType: FilterTypes,
    filterOption: string
  ): boolean => {
    return activeFilter[filterType].includes(filterOption);
  };
  return {
    availableFilters: readonly(filters),
    setActiveFilter,
    activeFilter: readonly(activeFilter),
    isFilterActive,
    getFiltersForQuery,
    isFilterBarVisible,
  };
};
