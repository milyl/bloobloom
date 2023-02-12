import type { AxiosResponse } from "axios";
import axios from "axios";
import type { CollectionsViewModel } from "./types";
import { url } from "./url";

export const getMenuCollections = async (): Promise<
  AxiosResponse<CollectionsViewModel>
> => {
  return axios.get(url.getMenuCollections);
};
