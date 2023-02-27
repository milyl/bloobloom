<template>
  <div class="navigation-item">
    <RouterLink class="navigation-item__link" v-if="link?.length" :to="link">{{
      title
    }}</RouterLink>
    <div class="navigation-item__link" v-else>{{ title }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";

export default defineComponent({
  name: "NavigationItem",
  components: { RouterLink },
  props: {
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/abstracts/_variables.scss";
@import "@/assets/scss/abstracts/_breakpoints.scss";
.navigation-item {
  width: 16rem;
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  @include respond(sm md lg) {
    font-size: $font-size-small;
    width: fit-content;
    padding: 0 $p-md;
  }

  &:hover {
    .navigation-item__link {
      text-decoration: underline;
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
  }
}
</style>
