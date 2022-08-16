import {} from '@vue-storefront/core';

export type useProfile = any;

export type SearchParams = Record<string, any>;

export type ResourceResponse = {
  data: any[];
  total: number;
};

export type ListResponse = any;

export type CreateListParams = {
  name: string;
  data: Array<any>;
}

export type AddListItemParams = {
  name: string;
  data: Array<any>;
}

export type OmneoTierProperties = {
  id: number,
  name: string,
  handle: string,
  is_floor: boolean,
  value_min: number,
  value_maintain: number,
  internal_notes: string | null,
  description: string | null,
  short_description: string | null,
  long_description: string | null,
  terms_conditions: string | null,
  icon: string | null,
  image_url: string | null,
  earn_instructions: string | null,
  tags: Array<string>,
  created_at: Date,
  updated_at: Date
}

export type OmneoTier = {
  id: number,
  profile_id: string,
  current_tier?: OmneoTierProperties | null,
  next_tier?: OmneoTierProperties | null,
  prev_tier?: OmneoTierProperties | null,
  is_floor: boolean,
  current_credit: number,
  current_progress: number,
  current_remain: number,
  next_progress: number,
  next_remain: number,
  total_points_12m: number,
  total_points_achievement: string | null,
  anniversary_at: Date,
  maintained_at: Date | null,
  assigned_at: Date | null,
  achieved_at: Date,
  created_at: Date,
  updated_at: Date
}
