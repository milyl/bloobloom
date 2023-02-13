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
import LogoType from "@/components/atoms/Logotype.vue";

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
.base-logo {
  &__logotype {
    height: 2.2rem;
  }
}
</style>
