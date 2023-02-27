import type { AxiosResponse } from "axios";
import axios from "axios";
import type { GlassesListViewModel } from "./types";
import { url } from "./url";

export const getGlasses = async (
  collectionName: string,
  params: any,
  paramsAsQuery?: string
): Promise<AxiosResponse<GlassesListViewModel>> => {
  let urlRequest: string = url.getGlassesCollection.replace(
    "COLLECTION_NAME",
    collectionName
  );
  if (paramsAsQuery) {
    urlRequest = `${urlRequest}?${paramsAsQuery}`;
  }
  return axios.get(urlRequest, { params });
};
