import { apiClientFactory } from '@vue-storefront/core';
import type { Setttings, Endpoints } from './types';
import axios from 'axios';

import { getToken } from './api/getToken';
import { getProfile } from './api/getProfile';
import { getProfileBalance } from './api/getProfileBalance';
import { getProfileTransactions } from './api/getProfileTransactions';
import { getProfileLists } from './api/getProfileLists';
import { getProfileRewards } from './api/getProfileRewards';
import { getProfileBenefits } from './api/getProfileBenefits';
import { getProfileAggregations } from './api/getProfileAggregations';
import { getLocations } from './api/getLocations';
import { updateProfile } from './api/updateProfile';
import { updateProfileComms } from './api/updateProfileComms';
import { createProfileList } from './api/createProfileList';
import { redeemReward } from './api/redeemReward';
import { getProfileTiers } from './api/getProfileTiers';
import { addProfileListItem } from './api/addProfileListItem';
import { updateProfileListItem } from './api/updateProfileListItem';
import { removeProfileListItem } from './api/removeProfileListItem';
import { updateProfileList } from './api/updateProfileList';

const onCreate = (settings) => {
  const client = axios.create({
    baseURL: settings.api.url
  });

  return {
    config: {
      ...settings
    },
    client,
    cookies: (settings.api).cookies
  };
};

const { createApiClient } = apiClientFactory<Setttings, Endpoints>({
  onCreate,
  api: {
    getToken,
    getLocations,
    getProfile,
    getProfileBalance,
    getProfileTransactions,
    getProfileLists,
    getProfileRewards,
    getProfileBenefits,
    getProfileAggregations,
    updateProfile,
    updateProfileComms,
    createProfileList,
    redeemReward,
    getProfileTiers,
    addProfileListItem,
    updateProfileListItem,
    removeProfileListItem,
    updateProfileList
  }
});

export {
  createApiClient
};
