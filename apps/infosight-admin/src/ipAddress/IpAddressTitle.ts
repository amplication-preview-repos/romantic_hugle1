import { IpAddress as TIpAddress } from "../api/ipAddress/IpAddress";

export const IPADDRESS_TITLE_FIELD = "address";

export const IpAddressTitle = (record: TIpAddress): string => {
  return record.address?.toString() || String(record.id);
};
