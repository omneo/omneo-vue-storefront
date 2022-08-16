import { OmneoTier } from 'src/types';

function getCurrentTierName (tiers: OmneoTier): string {
  return tiers?.current_tier?.name || '';
}

function getNextTierName (tiers: OmneoTier): string {
  return tiers?.next_tier?.name || '';
}

function getCurrentTierMin (tiers: OmneoTier): number {
  return tiers?.current_tier?.value_min || 0;
}

function getNextTierMin (tiers: OmneoTier): number {
  return tiers?.next_tier?.value_min || 0;
}

function getCurrentTierDescription (tiers: OmneoTier): string {
  return tiers?.current_tier?.description || '';
}

function getNextTierDescription (tiers: OmneoTier): string {
  return tiers?.next_tier?.description || '';
}

function getCurrentTierImage (tiers: OmneoTier): string {
  return tiers?.current_tier?.image_url || '';
}

function getNextTierImage (tiers: OmneoTier): string {
  return tiers?.next_tier?.image_url || '';
}

function getCurrentTierMaintain (tiers: OmneoTier): number {
  return tiers?.current_tier?.value_maintain || 0;
}

function getNextTierMaintain (tiers: OmneoTier): number {
  return tiers?.next_tier?.value_maintain || 0;
}

function getCurrentCredit (tiers: OmneoTier): number {
  return tiers?.current_credit || 0;
}

function getProgress (tiers: OmneoTier): number {
  return tiers?.current_progress || 0;
}

function getCurrentRemaining (tiers: OmneoTier): number {
  return tiers?.current_remain || 0;
}

function getNextProgress (tiers: OmneoTier): number {
  return tiers?.next_progress || 0;
}

function getNextRemaining (tiers: OmneoTier): number {
  return tiers?.next_remain || 0;
}

function getTotalPoints12m (tiers: OmneoTier): number {
  return tiers?.total_points_12m || 0;
}

function getTierAnniversary (tiers: OmneoTier): Date | null {
  return tiers?.anniversary_at || null;
}

function getTierMaintainedAt (tiers: OmneoTier): Date | null {
  return tiers?.maintained_at || null;
}

function getTierAssignedAt (tiers: OmneoTier): Date | null {
  return tiers?.assigned_at || null;
}

function getTierAchievedAt (tiers: OmneoTier): Date | null {
  return tiers?.achieved_at || null;
}

export const profileTiersGetters = {
  getCurrentTierName,
  getNextTierName,
  getCurrentTierMin,
  getNextTierMin,
  getCurrentTierDescription,
  getNextTierDescription,
  getCurrentTierImage,
  getNextTierImage,
  getCurrentTierMaintain,
  getNextTierMaintain,
  getCurrentCredit,
  getProgress,
  getCurrentRemaining,
  getNextProgress,
  getNextRemaining,
  getTotalPoints12m,
  getTierAnniversary,
  getTierMaintainedAt,
  getTierAssignedAt,
  getTierAchievedAt
};
