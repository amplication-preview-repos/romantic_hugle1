import * as graphql from "@nestjs/graphql";
import { IpAddressResolverBase } from "./base/ipAddress.resolver.base";
import { IpAddress } from "./base/IpAddress";
import { IpAddressService } from "./ipAddress.service";

@graphql.Resolver(() => IpAddress)
export class IpAddressResolver extends IpAddressResolverBase {
  constructor(protected readonly service: IpAddressService) {
    super(service);
  }
}
