import { WebsiteHistoryWhereInput } from "./WebsiteHistoryWhereInput";
import { WebsiteHistoryOrderByInput } from "./WebsiteHistoryOrderByInput";

export type WebsiteHistoryFindManyArgs = {
  where?: WebsiteHistoryWhereInput;
  orderBy?: Array<WebsiteHistoryOrderByInput>;
  skip?: number;
  take?: number;
};
