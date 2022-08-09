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
  if (!Profile?.tags) return [];
  return Profile.tags;
}

function getStatuses(Profile: Profile): Array<string> {
  if (!Profile?.statuses) return [];
  return Profile.statuses;
}

function getJoinedLocation(Profile: Profile): any {
  return Profile?.joined_location || {};
}

function getJoinedLocationName(Profile: Profile): string {
  return Profile?.joined_location?.name || '';
}

function getJoinedLocationID(Profile: Profile): string {
  if (!Profile?.joined_location) return '';
  return Profile?.joined_location?.id.toString();
}

function getJoinedLocationExternalID(Profile: Profile): string {
  return Profile?.joined_location?.external_id || '';
}

function getJoinedLocationExternalCode(Profile: Profile): string {
  return Profile?.joined_location?.external_code || '';
}

function getPreferredLocation(Profile: Profile): any {
  return Profile?.preferred_location || {};
}

function getPreferredLocationName(Profile: Profile): string {
  return Profile?.preferred_location?.name || '';
}

function getPreferredLocationID(Profile: Profile): string {
  if (!Profile?.preferred_location) return '';
  return Profile?.preferred_location?.id.toString();
}

function getPreferredLocationExternalID(Profile: Profile): string {
  return Profile?.preferred_location?.external_id || '';
}

function getPreferredLocationExternalCode(Profile: Profile): string {
  return Profile?.preferred_location?.external_code || '';
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
  getJoinedLocationName,
  getJoinedLocationID,
  getJoinedLocationExternalID,
  getJoinedLocationExternalCode,
  getPreferredLocation,
  getPreferredLocationName,
  getPreferredLocationID,
  getPreferredLocationExternalID,
  getPreferredLocationExternalCode
};
