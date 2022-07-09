
import { computed } from '@nuxtjs/composition-api';
import { useVSFContext, sharedRef, Logger} from '@vue-storefront/core';
import retrieveTokenCookie from '../helpers/retrieveTokenCookie';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useProfile = () => {
  const context = useVSFContext();
  const loading = sharedRef(false, 'profile-loading');
  const profile = sharedRef(null, 'profile');
  const balance = sharedRef(null, 'balance');

  const error = sharedRef({
    load: null,
    balance: null,
    logIn: null,
    logOut: null,
    updateProfile: null,
    updateProfileComms: null
  }, 'profile-error');

  const load = async () => {
    const token = retrieveTokenCookie(context);
    try {
      loading.value = true;
      const response = await context.$omneo.api.getProfile(token);
      if (response.status === 200 && response.data) {
        profile.value = response.data;
      }
      error.value.search = null;
    } catch (err) {
      error.value.search = err?.response?.data?.errors;
      Logger.error('profile/profile', err);
    }
    loading.value = false;
  };

  const updateProfile = async (params: any) => {
    const token = retrieveTokenCookie(context);
    try {
      loading.value = true;
      const response = await context.$omneo.api.updateProfile(token, params);
      if (response.status === 200 && response.data) {
        profile.value = response.data;
      } else {
        throw response;
      }
      error.value.updateProfile = null;
    } catch (err) {
      error.value.updateProfile = err.errors;
      Logger.error('profile/updateProfile', err);
    }
    loading.value = false;
  };

  const updateProfileComms = async (params: any) => {
    const token = retrieveTokenCookie(context);
    try {
      loading.value = true;
      const response = await context.$omneo.api.updateProfileComms(token, params);
      if (response.status === 200 && response.data) {
        profile.value.attributes.comms = response.data;
      } else {
        throw response;
      }
      error.value.updateProfileComms = null;
    } catch (err) {
      error.value.updateProfileComms = err.errors;
      Logger.error('profile/updateProfileComms', err);
    }
    loading.value = false;
  };

  const checkBalance = async () => {
    const token = retrieveTokenCookie(context);
    try {
      loading.value = true;
      const response = await context.$omneo.api.getProfileBalance(token);
      if (response.status === 200 && response.data) {
        balance.value = response.data;
      } else {
        throw response;
      }
      error.value.checkBalance = null;
    } catch (err) {
      error.value.checkBalance = err.errors;
      Logger.error('profile/checkBalance', err);
    }
    loading.value = false;
  };

  const logIn = async (identifier: string) => {
    const app = context.$omneo.config.app;
    const appKey = app.$config.appKey;
    const token = retrieveTokenCookie(context);

    if (token) return token;
    try {
      const response = await context.$omneo.api.getToken(identifier);
      app.$cookies.set(`omneo_${appKey}_token`, response.token);
      return response.token;
    } catch (err) {
      error.value.logIn = err;
      Logger.error('profile/logIn', err);
    }
  };

  const logOut = async () => {
    const app = context.$omneo.config.app;
    const appKey = app.$config.appKey;
    try {
      const token = retrieveTokenCookie(context);
      if (token) {
        app.$cookies.remove(`omneo_${appKey}_token`);
      }
    } catch (err) {
      error.value.logOut = err;
      Logger.error('profile/logOut', err);
    }
  };

  return {
    load,
    logIn,
    logOut,
    updateProfile,
    updateProfileComms,
    checkBalance,
    profile: computed(() => profile.value),
    balance: computed(() => balance.value),
    loading: computed(() => loading.value),
    error: computed(() => error.value)
  };
};
