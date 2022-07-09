import { Context } from '@vue-storefront/core';

export default function retrieveTokenCookie(context: Context): string {
  const app = context.$omneo.config.app;
  const appKey = app.$config.appKey;
  return app.$cookies.get(`omneo_${appKey}_token`);
}
