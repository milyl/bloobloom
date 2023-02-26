import { getGlasses } from "../../../services/glassesList/api";
import { ref, computed } from "vue";
import type { GlassesViewModel } from "@/services/glassesList/types";

const glasses = ref<GlassesViewModel[]>([]);
const meta = ref({
  totalCount: -1,
  pageNumber: 1,
  pageLimit: 12,
});

const loadingGlasses = ref<boolean>(false);

export const useGlassesCollection = () => {
  const noMoreGlassesToFetch = computed((): boolean => {
    return (
      meta.value.totalCount !== -1 &&
      meta.value.pageNumber * meta.value.pageLimit >= meta.value.totalCount
    );
  });
  const getGlassesCollection = async (
    collectionName: string,
    clearFetch: boolean = false,
    params?: string | undefined
  ) => {
    try {
      loadingGlasses.value = true;
      if (clearFetch) {
        _resetMetaData();
        glasses.value = [];
      }

      const { data } = await getGlasses(
        collectionName,
        {
          "page[limit]": meta.value.pageLimit,
          "page[number]": meta.value.pageNumber,
        },
        params
      );

      glasses.value.push(...data.glasses);

      _setMetaData(data.meta.total_count, meta.value.pageNumber + 1);
    } catch (err) {
      glasses.value = [];
      _resetMetaData();
    } finally {
      loadingGlasses.value = false;
    }
  };

  const _setMetaData = (totalCount: number, pageNumber: number) => {
    meta.value.pageNumber = pageNumber;
    meta.value.totalCount = totalCount;
  };

  const _resetMetaData = () => _setMetaData(-1, 1);
  return {
    getGlassesCollection,
    glassesList: glasses,
    noMoreGlassesToFetch,
    loadingGlasses,
  };
};
