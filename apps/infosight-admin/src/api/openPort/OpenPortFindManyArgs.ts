import { OpenPortWhereInput } from "./OpenPortWhereInput";
import { OpenPortOrderByInput } from "./OpenPortOrderByInput";

export type OpenPortFindManyArgs = {
  where?: OpenPortWhereInput;
  orderBy?: Array<OpenPortOrderByInput>;
  skip?: number;
  take?: number;
};
