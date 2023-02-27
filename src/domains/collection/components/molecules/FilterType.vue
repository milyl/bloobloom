<template>
  <div class="filter-type">
    <h1>{{ name }}</h1>
    <div class="filter-type__options">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import type { FilterTypes } from "@/composables/filters/types";
import { defineComponent, type PropType } from "vue";

export default defineComponent({
  name: "FilterType",
  props: {
    name: {
      type: String as PropType<FilterTypes>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/abstracts/_variables.scss";
.filter-type {
  background-color: $white;
  h1 {
    text-align: center;
    padding: $p-md;
    border-bottom: 1px solid $black;
    font-weight: $font-weight-bold;
    text-transform: uppercase;
    font-size: $font-size;
  }

  &__options {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: $p-md;
  }
}
</style>
