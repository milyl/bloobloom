<template>
  <div class="collection-page">
    <CollectionFilters :collection-name="collectionName" />
    <CollectionGrid :collection="glassesList" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from "vue";
import { useGlassesCollection } from "../composables";
import { useRoute } from "vue-router";
import CollectionFilters from "@/domains/collection/components/organism/CollectionFilters.vue";
import CollectionGrid from "@/domains/collection/components/organism/CollectionGrid.vue";

export default defineComponent({
  name: "CollectionPage",
  components: { CollectionFilters, CollectionGrid },
  setup() {
    const route = useRoute();
    const { getGlassesCollection, glassesList } = useGlassesCollection();
    const collectionName = ref<string>("");

    watchEffect(async () => {
      const { collection } = route.params;
      collectionName.value = collection as string;
      await getGlassesCollection(collection as string, true);
    });
    return { glassesList, collectionName };
  },
});
</script>

<style lang="scss" scoped></style>
