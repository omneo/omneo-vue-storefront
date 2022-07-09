import { computed } from '@nuxtjs/composition-api';
import { useVSFContext, sharedRef, Logger} from '@vue-storefront/core';
import retrieveTokenCookie from '../helpers/retrieveTokenCookie';
import { CreateListParams, RemoveListItemParams, AddListItemParams } from '../types';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useProfileLists = () => {
  const context = useVSFContext();
  const loading = sharedRef(false, 'lists-loading');
  const lists = sharedRef(null, 'lists');

  const error = sharedRef({
    search: null,
    createList: null,
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
        // rewards.value = response.data;
      } else {
        throw response;
      }
      error.value.createList = null;
    } catch (err) {
      error.value.createList = err.errors;
      Logger.error('profile/createList', err);
    }
  };

  const addListItem = async (params: AddListItemParams) => {
    const token = retrieveTokenCookie(context);
    try {
      const response = await context.$omneo.api.addListItem(token, params);
      if (response.status === 200 && response.data) {
        // rewards.value = response.data;
      } else {
        throw response;
      }
      error.value.createList = null;
    } catch (err) {
      error.value.createList = err.errors;
      Logger.error('profile/addListItem', err);
    }
  };

  const removeListItem = async (params: RemoveListItemParams) => {
    const token = retrieveTokenCookie(context);
    try {
      const response = await context.$omneo.api.addListItem(token, params);
      if (response.status === 200 && response.data) {
        // rewards.value = response.data;
      } else {
        throw response;
      }
      error.value.createList = null;
    } catch (err) {
      error.value.createList = err.errors;
      Logger.error('profile/removeListItem', err);
    }
  };

  return {
    search,
    addListItem,
    createList,
    removeListItem,
    lists: computed(() => lists.value),
    loading: computed(() => loading.value),
    error: computed(() => error.value)
  };
};
