import { SortOrder } from "../../util/SortOrder";

export type OpenPortOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  portNumber?: SortOrder;
  protocol?: SortOrder;
};
