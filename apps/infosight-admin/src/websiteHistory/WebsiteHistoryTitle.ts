import { WebsiteHistory as TWebsiteHistory } from "../api/websiteHistory/WebsiteHistory";

export const WEBSITEHISTORY_TITLE_FIELD = "id";

export const WebsiteHistoryTitle = (record: TWebsiteHistory): string => {
  return record.id?.toString() || String(record.id);
};
