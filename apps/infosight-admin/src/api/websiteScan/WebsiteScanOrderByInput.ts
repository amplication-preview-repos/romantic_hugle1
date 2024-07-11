import { SortOrder } from "../../util/SortOrder";

export type WebsiteScanOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
  scanDate?: SortOrder;
};
