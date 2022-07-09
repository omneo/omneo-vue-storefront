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

export type RemoveListItemParams = {
  name: string;
  id: number
}
