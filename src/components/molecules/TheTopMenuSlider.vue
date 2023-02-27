<template>
  <div
    class="top-menu-slider"
    :class="{ 'top-menu-slider--visible': isCollapsibleMenuVisible }"
    @mouseover="isCollapsibleMenuVisible = true"
    @mouseleave="isCollapsibleMenuVisible = false"
  >
    <ul class="top-menu-slider__root">
      <slot name="root" />
    </ul>
    <div class="top-menu-slider__submenu">
      <slot name="submenu" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useMainNavigation } from "@/composables/mainNavigation";

export default defineComponent({
  name: "TheTopMenuSlider",
  setup() {
    const { isCollapsibleMenuVisible } = useMainNavigation();
    return { isCollapsibleMenuVisible };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/abstracts/_variables.scss";
@import "@/assets/scss/abstracts/_breakpoints.scss";
.top-menu-slider {
  position: absolute;
  background-color: #ffffff;
  border: 1px solid $black;
  height: 100vh;
  transform: translateX(-100%);
  transition: all 0.3s ease-out;
  min-width: calc(3 * 16rem);

  @include respond(sm md) {
    min-width: 0;
  }

  &--visible {
    transform: translateX(0);
    .top-menu-slider__submenu {
      transform: translateX(100%);
    }
  }

  &__submenu {
    position: absolute;
    right: 0;
    border-right: 1px solid black;
    border-left: 1px solid black;
    background-color: $white;
    top: 0;
    min-width: 16rem;
    bottom: 0;
    transform: translateX(0);

    &:empty {
      transform: translateX(0);
      opacity: 0;
    }
  }
}
</style>
