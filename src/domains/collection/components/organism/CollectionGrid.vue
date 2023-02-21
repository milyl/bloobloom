<template>
  <div class="collection-grid">
    <CollectionGridItem
      v-for="item in collection"
      :key="item.id"
      :item="item"
    />
  </div>
</template>

<script lang="ts">
import type { GlassesViewModel } from "@/services/glassesList/types";
import { defineComponent, type PropType } from "vue";
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

  @include respond(sm) {
    grid-template-columns: 1fr;
  }

  @include respond(md) {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
