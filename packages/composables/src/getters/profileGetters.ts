import type { Profile } from '@omneo/omneo-vue-storefront-api/src/types';

function getFirstName(Profile: Profile): string {
  return Profile?.first_name || '';
}

function getLastName(Profile: Profile): string {
  return Profile?.last_name || '';
}

function getFullName(Profile: Profile): string {
  return `${Profile?.first_name || ''} ${Profile?.last_name || ''}`;
}

function getEmailAddress(Profile: Profile): string {
  return Profile?.email || '';
}

function getIdentityByHandle(Profile: Profile, identityHandle: string): string {
  if (!Profile?.identities) return '';
  const identity = Profile.identities.find((identity) => identity.handle === identityHandle);
  return identity?.identifier || '';
}

function getOptInStatus(Profile: Profile, commsMethod: 'email' | 'sms' | 'phone' | 'post'): boolean|null {
  if (!Profile) return null;
  const {attributes: {comms}} = Profile;
  const bounced = comms[`${commsMethod}_bounced`];
  const promo = comms[`${commsMethod}_promo`];
  const optout = comms[`${commsMethod}_optout`];

  return (promo || promo === null) && !optout && !bounced;
}

function getTags(Profile: Profile): Array<string> {
  if (!Profile?.statuses) return [];
  return Profile.tags.map((tag) => tag.handle);
}

function getStatuses(Profile: Profile): Array<string> {
  if (!Profile?.tags) return [];
  return Profile.statuses.map((status) => status.handle);
}

function getJoinedLocation(Profile: Profile): any {
  return Profile?.joined_location || {};
}

function getPreferredLocation(Profile: Profile): any {
  return Profile?.preferred_location || {};
}

export const profileGetters = {
  getFirstName,
  getLastName,
  getFullName,
  getEmailAddress,
  getIdentityByHandle,
  getOptInStatus,
  getStatuses,
  getTags,
  getJoinedLocation,
  getPreferredLocation
};
