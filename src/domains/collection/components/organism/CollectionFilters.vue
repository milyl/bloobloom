<template>
  <div class="collection-filters">
    <div class="collection-filters__left" />
    <div class="collection-filters__center">{{ collectionNameFormated }}</div>
    <FiltersOptions />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import FiltersOptions from "../molecules/FiltersOptions.vue";

export default defineComponent({
  name: "CollectionFilters",
  components: { FiltersOptions },
  props: {
    collectionName: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const collectionNameFormated = computed((): string =>
      props.collectionName.replace("-", " ")
    );
    return { collectionNameFormated };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/abstracts/_variables.scss";
@import "@/assets/scss/abstracts/_breakpoints.scss";
.collection-filters {
  background-color: $white;
  height: $filters-bar-height;
  border-bottom: 1px solid $black;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @include respond(sm md) {
    grid-template-columns: 2fr 1fr;
  }

  &__left {
    @include respond(sm md) {
      display: none;
    }
  }
  &__center {
    text-transform: uppercase;
    font-weight: $font-weight-bold;
    font-size: $font-size-large;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
