
import { computed } from '@nuxtjs/composition-api';
import { useVSFContext, sharedRef, Logger} from '@vue-storefront/core';
import retrieveTokenCookie from '../helpers/retrieveTokenCookie';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useLocations = () => {
  const context = useVSFContext();
  const loading = sharedRef(false, 'locations-loading');
  const locations = sharedRef(null, 'locations');

  const error = sharedRef({
    load: null
  }, 'locations-error');

  const load = async () => {
    const token = retrieveTokenCookie(context);
    try {
      const response = await context.$omneo.api.getLocations(token);
      if (response.status === 200 && response.data) {
        locations.value = response.data;
      } else {
        throw response;
      }
      error.value.load = null;
    } catch (err) {
      error.value.load = err.errors;
      Logger.error('locations', err);
    }
  };

  return {
    load,
    locations: computed(() => locations.value),
    loading: computed(() => loading.value),
    error: computed(() => error.value)
  };
};
