<template>
  <div class="filter-option">{{ name }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FilterOption",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/abstracts/_variables.scss";
.filter-option {
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-weight: $font-weight-bold;
  font-size: $font-size;
  cursor: pointer;
}
</style>
