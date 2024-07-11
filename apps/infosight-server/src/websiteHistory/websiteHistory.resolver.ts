import * as graphql from "@nestjs/graphql";
import { WebsiteHistoryResolverBase } from "./base/websiteHistory.resolver.base";
import { WebsiteHistory } from "./base/WebsiteHistory";
import { WebsiteHistoryService } from "./websiteHistory.service";

@graphql.Resolver(() => WebsiteHistory)
export class WebsiteHistoryResolver extends WebsiteHistoryResolverBase {
  constructor(protected readonly service: WebsiteHistoryService) {
    super(service);
  }
}
