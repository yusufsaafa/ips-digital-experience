export { ipsBusinesses } from "./businesses";
export { ipsCapabilities } from "./capabilities";
export { ipsIndustries } from "./industries";
export { capabilityVisuals, heroVisual } from "./visual-assets";
export {
  getBusinessBySlug,
  getBusinessesByCapability,
  getBusinessesByIndustry,
  getCapabilityBySlug,
  getIndustryBySlug,
} from "./queries";
export { assertValidIpsRegistry, validateIpsRegistry } from "./validation";
export type {
  BusinessSlug,
  CapabilitySlug,
  IndustrySlug,
  IpsBusiness,
  IpsCapability,
  IpsIndustry,
} from "./types";
export type { IpsVisualAsset } from "./visual-assets";
