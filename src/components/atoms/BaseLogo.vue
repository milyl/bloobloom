<template>
  <RouterLink class="base-logo" to="/">
    <img
      v-if="showAs === LogoEnum.Icon"
      class="base-logo__image"
      src="@/assets/images/logo.png"
      alt="bloobloom"
    />
    <LogoType v-if="showAs === LogoEnum.Logotype" class="base-logo__logotype" />
  </RouterLink>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import { RouterLink } from "vue-router";
import LogoType from "./LogoType.vue";

export enum LogoEnum {
  Logotype = "Logotype",
  Icon = "Icon",
}

export default defineComponent({
  name: "BaseLogo",
  components: { RouterLink, LogoType },
  props: {
    showAs: {
      type: String as PropType<LogoEnum>,
      default: LogoEnum.Logotype,
    },
  },
  setup() {
    return { LogoEnum };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/abstracts/_breakpoints.scss";
.base-logo {
  &__logotype {
    height: 2.2rem;

    @include respond(sm md) {
      height: 1.5rem;
    }
  }
}
</style>
