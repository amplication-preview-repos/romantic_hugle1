import { WebsiteScanWhereInput } from "./WebsiteScanWhereInput";
import { WebsiteScanOrderByInput } from "./WebsiteScanOrderByInput";

export type WebsiteScanFindManyArgs = {
  where?: WebsiteScanWhereInput;
  orderBy?: Array<WebsiteScanOrderByInput>;
  skip?: number;
  take?: number;
};
