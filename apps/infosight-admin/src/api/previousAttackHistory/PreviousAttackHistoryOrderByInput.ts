import { SortOrder } from "../../util/SortOrder";

export type PreviousAttackHistoryOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  attackType?: SortOrder;
  description?: SortOrder;
  date?: SortOrder;
};
