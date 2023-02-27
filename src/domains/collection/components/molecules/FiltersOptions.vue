<template>
  <div class="filters-options">
    <FilterOption
      @click="isFilterBarVisible = !isFilterBarVisible"
      name="Filters"
    />
    <FilterOption name="Search" class="hide--sm hide--md" />
  </div>
</template>

<script lang="ts">
import { useFilters } from "@/composables/filters";
import { defineComponent } from "vue";
import FilterOption from "../atoms/FilterOption.vue";

export default defineComponent({
  name: "FiltersOptions",
  components: { FilterOption },
  setup() {
    const { isFilterBarVisible } = useFilters();
    return { isFilterBarVisible };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/abstracts/_variables.scss";
.filters-options {
  display: flex;
  justify-content: end;
  margin-right: 1px;
  & > * {
    border-left: 1px solid $black;
    min-width: 16rem;
  }
}
</style>
