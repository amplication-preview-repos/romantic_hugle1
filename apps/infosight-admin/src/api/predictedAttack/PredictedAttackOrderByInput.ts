import { SortOrder } from "../../util/SortOrder";

export type PredictedAttackOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  likelihood?: SortOrder;
  attackType?: SortOrder;
};
