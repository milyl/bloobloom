export type CollectionViewModel = {
  id: number;
  name: string;
  configuration_name: string;
};
export type CollectionsViewModel = {
  collections: CollectionViewModel[];
  meta: {
    total_count: number;
  };
};
