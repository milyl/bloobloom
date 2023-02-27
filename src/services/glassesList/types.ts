export type MediaViewModel = {
  id: number;
  medium_type: string;
  mime_type: string;
  file_location: string;
  file_name: string;
  original_file_name: string;
  size: number;
  url: string;
  position: number;
};

export type GlassesListViewModel = {
  glasses: GlassesViewModel[];
  meta: {
    total_count: number;
  };
};
export type GlassesViewModel = {
  id: number;
  name: string;
  configuration_name: string;
  default_collection_name: null | string;
  cost_breakdown: {
    id: number;
    materials: number;
    labour: number;
    transport: number;
    taxes: number;
    bloobloom_price: number;
  };
  glass_variants: [
    {
      id: number;
      barcode: null | string;
      harmonized_system_code: null | string;
      stock_keeping_unit: null | string;
      inventory: boolean;
      home_trial_available: boolean;
      price: number;
      default_glass_variant: boolean;
      frame_variant: {
        id: number;
        name: string;
        configuration_name: string;
        barcode: null | string;
        harmonized_system_code: null | string;
        stock_keeping_unit: null | string;
        status: string;
        colour: {
          id: number;
          name: string;
          media: MediaViewModel[];
        };
      };
      media: MediaViewModel[];
    }
  ];
};
