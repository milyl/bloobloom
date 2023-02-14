import { getGlasses } from "../../../services/glassesList/api";
import { readonly, ref } from "vue";
import type { GlassesViewModel } from "@/services/glassesList/types";

const glasses = ref<GlassesViewModel[]>([]);
const meta = ref({
  totalCount: 0,
  pageNumber: 1,
});
const filterParams = ref({
  "page[limit]": 12,
  "page[number]": 1,
});
export const useGlassesCollection = () => {
  const getGlassesCollection = async (
    collectionName: string,
    clearFetch: boolean = false
  ) => {
    try {
      const { data } = await getGlasses(collectionName, filterParams.value);
      if (clearFetch) {
        glasses.value = data.glasses;
      } else {
        glasses.value.push(...data.glasses);
      }
      _setMetaData(data.meta.total_count, meta.value.pageNumber + 1);
    } catch (err) {
      glasses.value = [];
      //TODO: error handling
      _resetMetaData();
    }
  };

  const _setMetaData = (totalCount: number, pageNumber: number) => {
    meta.value.pageNumber = pageNumber;
    meta.value.totalCount = totalCount;
  };

  const _resetMetaData = () => _setMetaData(0, 0);
  return {
    getGlassesCollection,
    glassesList: glasses,
  };
};
