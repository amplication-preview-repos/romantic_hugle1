import { WebsiteScan as TWebsiteScan } from "../api/websiteScan/WebsiteScan";

export const WEBSITESCAN_TITLE_FIELD = "url";

export const WebsiteScanTitle = (record: TWebsiteScan): string => {
  return record.url?.toString() || String(record.id);
};
