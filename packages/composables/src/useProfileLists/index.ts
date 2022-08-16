import { computed } from '@nuxtjs/composition-api';
import { useVSFContext, sharedRef, Logger} from '@vue-storefront/core';
import retrieveTokenCookie from '../helpers/retrieveTokenCookie';
import { CreateListParams, AddListItemParams } from '../types';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useProfileLists = () => {
  const context = useVSFContext();
  const loading = sharedRef(false, 'lists-loading');
  const lists = sharedRef(null, 'lists');

  const appendItemToList = (data: { product_list_id: string, [key: string]: string }): void => {
    if (!lists.value?.length) return;
    const list = lists.value.find((l) => l.id === data.product_list_id);
    if (!list) return;
    list.items.push(data);
  };

  const replaceListItems = (data: {product_list_id: string, [key: string]: string }): void => {
    if (!lists.value?.length) return;
    const list = lists.value.find((l) => l.id === data.product_list_id);
    if (!list) return;

    lists.value.items = data;
  };

  const replaceListItem = (data: {product_list_id: string, [key: string]: string }): void => {
    if (!lists.value?.length) return;
    const list = lists.value.find((l) => l.id === data.product_list_id);
    if (!list) return;

    const itemIndex = list.items.findIndex((i) => i.id === data.id);
    if (itemIndex === undefined) return;

    lists.value[itemIndex].items.splice(itemIndex, itemIndex, data);
  };

  const replaceList = (data: any): boolean => {
    if (!lists.value?.length) return;
    const listIndex = lists.value.findIndex((l) => l.id === data.id);
    if (listIndex === undefined) return;
    lists.value.splice(listIndex, listIndex, data);
  };

  const error = sharedRef({
    search: null,
    createList: null,
    updateList: null,
    addListItem: null,
    removeListItem: null
  }, 'lists-error');

  const search = async () => {
    const token = retrieveTokenCookie(context);
    try {
      const response = await context.$omneo.api.getProfileLists(token);
      if (response.status === 200 && response.data) {
        lists.value = response.data;
      } else {
        throw response;
      }
      error.value.search = null;
    } catch (err) {
      error.value.search = err.errors;
      Logger.error('profile/lists', err);
    }
  };

  const createList = async (params: CreateListParams) => {
    const token = retrieveTokenCookie(context);
    try {
      const response = await context.$omneo.api.createProfileList(token, params);
      if (response.status === 200 && response.data) {
        if (lists.value?.length) lists.value.push(response.data);
      } else {
        throw response;
      }
      error.value.createList = null;
    } catch (err) {
      error.value.createList = err.errors;
      Logger.error('profile/createList', err);
    }
  };

  const updateList = async (handle: string, params: CreateListParams) => {
    const token = retrieveTokenCookie(context);
    try {
      const response = await context.$omneo.api.updateProfileList(token, handle, params);
      if (response?.id) {
        replaceList(response);
      } else {
        throw response;
      }
      error.value.updateList = null;
    } catch (err) {
      error.value.updateList = err.errors;
      Logger.error('profile/updateList', err);
    }
  };

  const addListItem = async (handle: string, params: AddListItemParams) => {
    const token = retrieveTokenCookie(context);
    try {
      const response = await context.$omneo.api.addProfileListItem(token, handle, params);
      if (response?.id) {
        appendItemToList(response);
      } else {
        throw response;
      }
      error.value.addListItem = null;
    } catch (err) {
      error.value.addListItem = err.errors;
      Logger.error('profile/addListItem', err);
    }
  };

  const updateListItem = async (handle: string, listItemId: number, params: CreateListParams) => {
    const token = retrieveTokenCookie(context);
    try {
      const response = await context.$omneo.api.updateProfileListItem(token, handle, listItemId, params);
      if (response?.id) {
        replaceListItem(response);
      } else {
        throw response;
      }
      error.value.updateListItem = null;
    } catch (err) {
      error.value.updateListItem = err.errors;
      Logger.error('profile/updateListItem', err);
    }
  };

  const removeListItem = async (handle: string, listItemId: number) => {
    const token = retrieveTokenCookie(context);
    try {
      const response = await context.$omneo.api.removeProfileListItem(token, handle, listItemId);
      if (response?.length || response?.length === 0) {
        replaceListItems(response);
      } else {
        throw response;
      }
      error.value.removeListItem = null;
    } catch (err) {
      error.value.removeListItem = err.errors;
      Logger.error('profile/removeListItem', err);
    }
  };

  return {
    search,
    createList,
    updateList,
    addListItem,
    removeListItem,
    updateListItem,
    lists: computed(() => lists.value),
    loading: computed(() => loading.value),
    error: computed(() => error.value)
  };
};
