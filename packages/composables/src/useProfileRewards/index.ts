import { computed } from '@nuxtjs/composition-api';
import { useVSFContext, sharedRef, Logger} from '@vue-storefront/core';
import retrieveTokenCookie from '../helpers/retrieveTokenCookie';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useProfileRewards = () => {
  const context = useVSFContext();
  const loading = sharedRef(false, 'rewards-loading');
  const rewards = sharedRef(null, 'rewards');

  const error = sharedRef({
    search: null,
    redeem: null
  }, 'rewards-error');

  const search = async () => {
    const token = retrieveTokenCookie(context);
    try {
      loading.value = true;
      const response = await context.$omneo.api.getProfileRewards(token);
      if (response.status === 200 && response.data) {
        rewards.value = response.data;
      } else {
        throw response;
      }
      error.value.search = null;
    } catch (err) {
      error.value.search = err.errors;
      Logger.error('profile/rewards', err);
    }
    loading.value = false;
  };

  const redeem = async (amount: number) => {
    const token = retrieveTokenCookie(context);
    try {
      loading.value = true;
      const response = await context.$omneo.api.redeemReward(token, amount);
      if (response.status === 200 && response.data) {
        rewards.value = response.data;
      } else {
        throw response;
      }
      error.value.redeem = null;
    } catch (err) {
      error.value.redeem = err.errors;
      Logger.error('profile/redeem', err);
    }
    loading.value = false;

  };

  return {
    search,
    redeem,
    rewards: computed(() => rewards.value),
    loading: computed(() => loading.value),
    error: computed(() => error.value)
  };
};
