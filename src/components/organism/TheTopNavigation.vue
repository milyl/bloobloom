<template>
  <div class="top-navigation">
    <TheTopNavigationBar />
    <TheTopMenuSlider>
      <template v-slot:root>
        <SliderMenuItem
          title="Spectacles"
          is-collapsible
          :class="{ 'is-selected': selectedCollectionType === 'Spectacles' }"
          @mouseover="selectedCollectionType = 'Spectacles'"
        />
        <SliderMenuItem
          title="Sunglasses"
          is-collapsible
          :class="{ 'is-selected': selectedCollectionType === 'Sunglasses' }"
          @mouseover="selectedCollectionType = 'Sunglasses'"
        />
        <SliderMenuItem title="Home try on" />
        <SliderMenuItem title="Pair for pair" />
      </template>
      <template v-slot:submenu>
        <SliderMenuItem
          v-for="item in filteredCollectionsList"
          :key="item.id"
          :title="trimTitle(item.name)"
          :link="item.configuration_name"
        />
      </template>
    </TheTopMenuSlider>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import TheTopNavigationBar from "../molecules/TheTopNavigationBar.vue";
import TheTopMenuSlider from "../molecules/TheTopMenuSlider.vue";
import SliderMenuItem from "../atoms/SliderMenuItem.vue";
import { useMainNavigation } from "@/composables/mainNavigation";

export default defineComponent({
  name: "TheTopNavigation",
  components: { TheTopNavigationBar, TheTopMenuSlider, SliderMenuItem },
  async setup() {
    const { getCollections, filterCollections } = useMainNavigation();
    const selectedCollectionType = ref<string>("");

    const filteredCollectionsList = computed(() =>
      filterCollections(selectedCollectionType.value)
    );
    const trimTitle = (title: string): string =>
      title.replace(selectedCollectionType.value, "").trim();
    await getCollections();
    return { selectedCollectionType, filteredCollectionsList, trimTitle };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/abstracts/_variables.scss";
.top-navigation {
  height: $top-navigation-height;
  position: fixed;
  border-bottom: 1px solid $black;
  width: 100%;
  background-color: $white;
}
</style>
