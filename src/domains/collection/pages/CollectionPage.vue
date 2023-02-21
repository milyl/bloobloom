<template>
  <div class="collection-page">
    <CollectionFilters :collection-name="collectionName" />
    <CollectionGrid ref="scrollArea" :collection="glassesList" />
    <BaseLoading v-if="loadingGlasses" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref, watch } from "vue";
import { useGlassesCollection } from "../composables";
import { useRoute } from "vue-router";
import CollectionFilters from "@/domains/collection/components/organism/CollectionFilters.vue";
import CollectionGrid from "@/domains/collection/components/organism/CollectionGrid.vue";
import BaseLoading from "@/components/atoms/BaseLoading.vue";
import { debounce } from "lodash";

export default defineComponent({
  name: "CollectionPage",
  components: { CollectionFilters, CollectionGrid, BaseLoading },
  setup() {
    const route = useRoute();
    const {
      getGlassesCollection,
      glassesList,
      noMoreGlassesToFetch,
      loadingGlasses,
    } = useGlassesCollection();
    const collectionName = ref<string>("");
    const scrollArea = ref();

    const handleScroll = debounce(() => {
      const elementBoundingBottom = scrollArea.value.$el.getBoundingClientRect().bottom;
      if (loadingGlasses.value || noMoreGlassesToFetch.value) return;

      const padding = 40;
      if (elementBoundingBottom - padding <= window.innerHeight) {
        fetchCollection(false);
      }
    }, 100);

    const fetchCollection = async (clearFetch: boolean) => {
      if (clearFetch) {
        window.scrollTo({ top: 0 });
      }
      await getGlassesCollection(collectionName.value, clearFetch);
    };

    const updateRoute = (route: string) => {
      collectionName.value = route as string;
      fetchCollection(true);
    };
    onMounted(() => {
      updateRoute(route.params.collection as string);
      window.addEventListener("scroll", handleScroll);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    watch(
      () => route.params.collection,
      (newRouteCollection) => updateRoute(newRouteCollection as string)
    );
    return {
      glassesList,
      collectionName,
      fetchCollection,
      noMoreGlassesToFetch,
      loadingGlasses,
      scrollArea,
    };
  },
});
</script>
