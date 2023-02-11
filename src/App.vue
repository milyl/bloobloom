<template>
  <TheTopNavigation />
  <RouterView />
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

<style lang="scss" scoped></style>
