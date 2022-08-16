
import { computed } from '@nuxtjs/composition-api';
import { useVSFContext, sharedRef, Logger} from '@vue-storefront/core';
import retrieveTokenCookie from '../helpers/retrieveTokenCookie';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useProfileTiers = () => {
  const context = useVSFContext();
  const loading = sharedRef(false, 'tiers-loading');
  const tiers = sharedRef(null, 'tiers');

  const error = sharedRef({
    search: null
  }, 'tiers-error');

  const search = async () => {
    const token = retrieveTokenCookie(context);
    try {
      const response = await context.$omneo.api.getProfileTiers(token);
      if (response.status === 200 && response.data) {
        tiers.value = response.data;
      } else {
        throw response;
      }
      error.value.search = null;
    } catch (err) {
      error.value.search = err.errors;
      Logger.error('profile/tiers', err);
    }
  };

  return {
    search,
    tiers: computed(() => tiers.value),
    loading: computed(() => loading.value),
    error: computed(() => error.value)
  };
};
