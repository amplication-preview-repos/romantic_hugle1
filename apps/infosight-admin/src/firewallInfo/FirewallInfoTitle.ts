import { FirewallInfo as TFirewallInfo } from "../api/firewallInfo/FirewallInfo";

export const FIREWALLINFO_TITLE_FIELD = "firewallName";

export const FirewallInfoTitle = (record: TFirewallInfo): string => {
  return record.firewallName?.toString() || String(record.id);
};
