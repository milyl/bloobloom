<template>
  <div class="slider-menu-item">
    <RouterLink class="slider-menu-item__link" v-if="link" :to="link">{{
      title
    }}</RouterLink>
    <div v-else class="slider-menu-item__link">{{ title }}</div>
    <div class="slider-menu-item__arrow" v-if="isCollapsible" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SliderMenuItem",
  props: {
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
    },
    isCollapsible: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/abstracts/_variables.scss";
.slider-menu-item {
  display: flex;
  align-items: center;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: $font-weight-semi-bold;
  font-size: $font-size;
  border-bottom: 1px solid $black;
  position: relative;

  &__arrow {
    margin-left: auto;
    padding-right: $p-lg;
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-left: 8px solid $black;
  }

  &.is-selected,
  &:hover {
    background-color: $black;
    .slider-menu-item__link {
      color: $white;
    }
    .slider-menu-item__arrow {
      border-left: 8px solid $white;
    }
  }

  &__link {
    font-weight: $font-weight-normal;
    text-transform: uppercase;
    font-size: $font-size-small;
    letter-spacing: 2px;
    text-align: center;
    text-decoration: none;
    color: $black;
    padding: $p-lg;
  }
}
</style>
