<template>
  <div class="filters-options">
    <FilterOption name="Colour" />
    <FilterOption name="Shape" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FilterOption from "../atoms/FilterOption.vue";

export default defineComponent({
  name: "FiltersOptions",
  components: { FilterOption },
  setup() {
    return {};
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
