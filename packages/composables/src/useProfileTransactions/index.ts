import { computed } from '@nuxtjs/composition-api';
import { useVSFContext, sharedRef, Logger} from '@vue-storefront/core';
import retrieveTokenCookie from '../helpers/retrieveTokenCookie';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useProfileTransactions = () => {
  const context = useVSFContext();
  const loading = sharedRef(false, 'transactions-loading');
  const transactions = sharedRef(null, 'transactions');

  const error = sharedRef({
    search: null,
    redeem: null
  }, 'transactions-error');

  const search = async () => {
    const token = retrieveTokenCookie(context);
    try {
      const response = await context.$omneo.api.getProfileTransactions(token);
      if (response.status === 200 && response.data) {
        transactions.value = response.data;
      } else {
        throw response;
      }
      error.value.search = null;
    } catch (err) {
      error.value.search = err.errors;
      Logger.error('profile/transactions', err);
    }
  };

  return {
    search,
    transactions: computed(() => transactions.value),
    loading: computed(() => loading.value),
    error: computed(() => error.value)
  };
};
