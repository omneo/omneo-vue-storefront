
import { computed } from '@nuxtjs/composition-api';
import { useVSFContext, sharedRef, Logger} from '@vue-storefront/core';
import retrieveTokenCookie from '../helpers/retrieveTokenCookie';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useProfileBenefits = () => {
  const context = useVSFContext();
  const loading = sharedRef(false, 'benefits-loading');
  const benefits = sharedRef(null, 'benefits');

  const error = sharedRef({
    search: null
  }, 'benefits-error');

  const search = async () => {
    const token = retrieveTokenCookie(context);
    try {
      const response = await context.$omneo.api.getProfileBenefits(token);
      if (response.status === 200 && response.data) {
        benefits.value = response.data;
      } else {
        throw response;
      }
      error.value.search = null;
    } catch (err) {
      error.value.search = err.errors;
      Logger.error('profile/benefits', err);
    }
  };

  return {
    search,
    benefits: computed(() => benefits.value),
    loading: computed(() => loading.value),
    error: computed(() => error.value)
  };
};
