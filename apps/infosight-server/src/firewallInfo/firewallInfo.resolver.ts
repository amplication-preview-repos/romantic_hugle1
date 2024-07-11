import * as graphql from "@nestjs/graphql";
import { FirewallInfoResolverBase } from "./base/firewallInfo.resolver.base";
import { FirewallInfo } from "./base/FirewallInfo";
import { FirewallInfoService } from "./firewallInfo.service";

@graphql.Resolver(() => FirewallInfo)
export class FirewallInfoResolver extends FirewallInfoResolverBase {
  constructor(protected readonly service: FirewallInfoService) {
    super(service);
  }
}
