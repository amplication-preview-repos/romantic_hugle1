import * as graphql from "@nestjs/graphql";
import { WebsiteScanResolverBase } from "./base/websiteScan.resolver.base";
import { WebsiteScan } from "./base/WebsiteScan";
import { WebsiteScanService } from "./websiteScan.service";

@graphql.Resolver(() => WebsiteScan)
export class WebsiteScanResolver extends WebsiteScanResolverBase {
  constructor(protected readonly service: WebsiteScanService) {
    super(service);
  }
}
