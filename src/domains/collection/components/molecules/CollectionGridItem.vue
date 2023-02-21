<template>
  <div class="collection-grid-item">
    <img
      v-if="backgroundImageUrl.length"
      class="collection-grid-item__image"
      :src="backgroundImageUrl"
    />
    <div class="collection-grid-item__name">{{ item.name }}</div>
  </div>
</template>

<script lang="ts">
import type { GlassesViewModel } from "@/services/glassesList/types";
import { computed, defineComponent, type PropType } from "vue";

export default defineComponent({
  name: "CollectionGridItem",
  props: {
    item: {
      type: Object as PropType<GlassesViewModel>,
      required: true,
    },
  },
  setup(props) {
    const backgroundImageUrl = computed((): string => {
      const variants = props.item.glass_variants;
      let mediaIndex = null;
      const variantIndex = variants.findIndex((variant) =>
        variant.media.some((media, index) => {
          if (media.url.length) {
            mediaIndex = index;
            return media.url.length;
          }
        })
      );
      if (mediaIndex === null) return "";
      return variants[variantIndex].media[mediaIndex].url;
    });
    return { backgroundImageUrl };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/abstracts/_variables.scss";
@import "@/assets/scss/abstracts/_breakpoints.scss";
.collection-grid-item {
  background-color: $white;
  min-height: 35rem;
  position: relative;
  z-index: $z-0;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    .collection-grid-item__image {
      transform: scale(1.1);
    }
  }

  @include respond(sm) {
    min-height: 20rem;
  }

  @include respond(md) {
    min-height: 30rem;
  }

  &__name {
    padding: $p-lg;
    text-transform: uppercase;
    font-weight: $font-weight-bold;
    font-size: $font-size-large;
    text-align: center;
  }

  &__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: $-z-1;
    transition: all 0.3s ease-out;
  }
}
</style>
