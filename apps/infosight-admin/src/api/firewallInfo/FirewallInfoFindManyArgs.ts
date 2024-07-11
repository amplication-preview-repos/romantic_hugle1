import { FirewallInfoWhereInput } from "./FirewallInfoWhereInput";
import { FirewallInfoOrderByInput } from "./FirewallInfoOrderByInput";

export type FirewallInfoFindManyArgs = {
  where?: FirewallInfoWhereInput;
  orderBy?: Array<FirewallInfoOrderByInput>;
  skip?: number;
  take?: number;
};
