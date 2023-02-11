<template>
  <div class="top-navigation">
    <TheTopNavigationBar />
    <!-- <TheTopMenu /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheTopNavigationBar from "../molecules/TheTopNavigationBar.vue";

export default defineComponent({
  name: "TheTopNavigation",
  components: { TheTopNavigationBar },
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/abstracts/_variables.scss";
.top-navigation {
  height: $top-navigation-height;
  position: fixed;
  border-bottom: 1px solid $black;
  width: 100%;
}
</style>
