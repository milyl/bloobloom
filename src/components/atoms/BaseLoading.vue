<template>
  <div class="base-loading">Loading...</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseLoading",
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/abstracts/_variables.scss";
.base-loading {
  padding: $p-2xl;
  text-align: center;
  font-size: $font-size-large;
}
</style>
