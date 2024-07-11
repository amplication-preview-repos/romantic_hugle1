import { SortOrder } from "../../util/SortOrder";

export type WebsiteHistoryOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  changeDate?: SortOrder;
  change?: SortOrder;
};
