<template>
  <div class="top-navigation-bar">
    <NavigationItem
      title="Menu"
      @mouseover="isCollapsibleMenuVisible = true"
      @mouseleave="isCollapsibleMenuVisible = false"
    />
    <NavigationItem title="Free eye test" />
    <NavigationItem title="About us" />
    <BaseLogo class="top-navigation-bar__logo" />
    <NavigationItem title="Help" />
    <NavigationItem title="Login" />
    <NavigationItem title="Bag" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseLogo from "@/components/atoms/BaseLogo.vue";
import NavigationItem from "../atoms/NavigationItem.vue";
import { useMainNavigation } from "@/composables/mainNavigation";

export default defineComponent({
  name: "TheTopNavigationBar",
  components: { NavigationItem, BaseLogo },
  setup() {
    const { isCollapsibleMenuVisible } = useMainNavigation();
    return { isCollapsibleMenuVisible };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/abstracts/_variables.scss";
.top-navigation-bar {
  height: $top-navigation-bar-height;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  &__logo {
    height: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > *:not(:last-child) {
    border-right: 1px solid $black;
  }
}
</style>
