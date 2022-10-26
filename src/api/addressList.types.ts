export interface addressItem {
  data: {
    country: string | null;
    country_iso_code: string | null;
    region_type_full: string | null;
    region: string | null;
    area_type_full: string | null;
    area: string | null;
    city: string | null;
    city_type_full: string | null;
    street_type_full: string | null;
    street: string | null;
    house_type_full: string | null;
    house: string | null;
    settlement_type_full: string | null;
    settlement: string | null;
  };
}

export interface addressListResponse {
  suggestions: addressItem[];
}
