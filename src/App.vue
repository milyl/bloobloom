<template>
  <Suspense>
    <TheTopNavigation />
  </Suspense>
  <div class="app-wrapper">
    <Suspense>
      <RouterView />
    </Suspense>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import TheTopNavigation from "@/components/organism/TheTopNavigation.vue";

export default defineComponent({
  name: "App",
  components: {
    RouterView,
    TheTopNavigation,
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/abstracts/_variables.scss";
@import "@/assets/scss/abstracts/_breakpoints.scss";

.app-wrapper {
  padding-top: $top-navigation-bar-height;

  @include respond(sm md) {
    padding-top: $top-navigation-bar-height-small;
  }
}
</style>
