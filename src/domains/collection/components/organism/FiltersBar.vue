<template>
  <div
    class="filters-bar"
    :class="{ 'filters-bar--visible': isFilterBarVisible }"
  >
    <FilterType
      v-for="filter in availableFilters"
      :name="filter.type"
      :key="filter.type"
    >
      <FilterOption
        class="filters-bar__option"
        v-for="option in filter.options"
        :class="isFilterActive(filter.type, option) ? 'filters-bar__option--active' : null"
        :name="option"
        :key="option"
        @click="setFilters(filter.type, option)"
      />
    </FilterType>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useFilters } from "@/composables/filters";
import FilterType from "../molecules/FilterType.vue";
import FilterOption from "../atoms/FilterOption.vue";
import type { FilterTypes } from "@/composables/filters/types";
import { useGlassesCollection } from "../../composables";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "FiltersBar",
  components: { FilterType, FilterOption },
  setup() {
    const {
      availableFilters,
      setActiveFilter,
      isFilterActive,
      getFiltersForQuery,
      isFilterBarVisible,
    } = useFilters();
    const { getGlassesCollection } = useGlassesCollection();
    const route = useRoute();
    const collection = computed(
      (): string => route.params.collection as string
    );

    const setFilters = (type: FilterTypes, option: string) => {
      setActiveFilter(type, option);
      getGlassesCollection(collection.value, true, getFiltersForQuery.value);
    };

    return {
      availableFilters,
      setActiveFilter,
      FilterOption,
      isFilterActive,
      setFilters,
      isFilterBarVisible,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/abstracts/_variables.scss";
.filters-bar {
  width: 100%;
  min-height: 5rem;
  display: flex;
  background-color: $black;
  gap: 1px;
  border-bottom: 1px solid $black;
  opacity: 0;
  transition: all 0.3s ease-out;

  &--visible {
    opacity: 1;
  }

  & > * {
    flex: 1;
  }

  &__option {
    font-weight: $font-weight-normal;
    padding: $p-xs $p-lg;
    cursor: pointer;
    transition: all 0.2s ease-out;

    &--active {
      background-color: $black;
      color: $white;
    }
  }
}
</style>
