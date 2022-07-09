
import { computed } from '@nuxtjs/composition-api';
import { useVSFContext, sharedRef, Logger} from '@vue-storefront/core';
import retrieveTokenCookie from '../helpers/retrieveTokenCookie';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useProfileAggregations = () => {
  const context = useVSFContext();
  const loading = sharedRef(false, 'aggregations-loading');
  const aggregations = sharedRef(null, 'aggregations');

  const error = sharedRef({
    load: null
  }, 'aggregations-error');

  const load = async () => {
    const token = retrieveTokenCookie(context);
    try {
      const response = await context.$omneo.api.getProfileAggregations(token);
      if (response.status === 200 && response.data) {
        aggregations.value = response.data;
      } else {
        throw response;
      }
      error.value.load = null;
    } catch (err) {
      error.value.load = err.errors;
      Logger.error('profile/aggregations', err);
    }
  };

  return {
    load,
    aggregations: computed(() => aggregations.value),
    loading: computed(() => loading.value),
    error: computed(() => error.value)
  };
};
