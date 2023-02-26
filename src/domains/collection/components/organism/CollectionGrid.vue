<template>
  <div
    class="collection-grid"
    :class="{ 'collection-grid--filters-visible': isFilterBarVisible }"
  >
    <CollectionGridItem
      v-for="item in collection"
      :key="item.id"
      :item="item"
    />
  </div>
</template>

<script lang="ts">
import { useFilters } from "@/composables/filters";
import type { GlassesViewModel } from "@/services/glassesList/types";
import {
  computed,
  defineComponent,
  onMounted,
  onUnmounted,
  ref,
  type PropType,
} from "vue";
import CollectionGridItem from "../molecules/CollectionGridItem.vue";

export default defineComponent({
  name: "CollectionGrid",
  components: { CollectionGridItem },
  props: {
    collection: {
      type: Array as PropType<GlassesViewModel[]>,
      required: true,
    },
  },
  setup() {
    const { isFilterBarVisible } = useFilters();
    const filterBarHeight = ref<number>(0);
    const translateY = computed((): string => `-${filterBarHeight.value}px`);
    const _getFiltersBarHeight = () => {
      const bar = document.getElementsByClassName(
        "filters-bar"
      )[0] as HTMLElement;
      filterBarHeight.value = bar?.offsetHeight;
    };

    onMounted(() => {
      _getFiltersBarHeight();
      window.addEventListener("resize", _getFiltersBarHeight);
    });
    onUnmounted(() => {
      window.removeEventListener("resize", _getFiltersBarHeight);
    });
    return { isFilterBarVisible, translateY };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/abstracts/_variables.scss";
@import "@/assets/scss/abstracts/_breakpoints.scss";

.collection-grid {
  display: grid;
  gap: 1px;
  grid-template-columns: repeat(3, 1fr);
  background-color: $black;
  transition: all 0.3s ease-out;
  transform: translateY(v-bind(translateY));

  @include respond(sm) {
    grid-template-columns: 1fr;
  }

  @include respond(md) {
    grid-template-columns: repeat(2, 1fr);
  }

  &--filters-visible {
    transform: translateY(0);
  }
}
</style>
