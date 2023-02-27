export type AvailableFiltersType = {
  type: FilterTypes;
  options: string[];
};

export type ActiveFilterType = {
  colour: string[];
  shape: string[];
};

export type FilterTypes = "colour" | "shape";
