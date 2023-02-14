import type { AxiosResponse } from "axios";
import axios from "axios";
import type { GlassesListViewModel } from "./types";
import { url } from "./url";

export const getGlasses = async (
  collectionName: string,
  params: any
): Promise<AxiosResponse<GlassesListViewModel>> => {
  const urlRequest: string = url.getGlassesCollection.replace(
    "COLLECTION_NAME",
    collectionName
  );
  return axios.get(urlRequest, { params });
};
