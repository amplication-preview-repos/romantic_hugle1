import * as graphql from "@nestjs/graphql";
import { WebsiteScanDto } from "../security/WebsiteScanDto";
import { IpAddressDto } from "../security/IpAddressDto";
import { OpenPortDto } from "../security/OpenPortDto";
import { VulnerabilityDto } from "../security/VulnerabilityDto";
import { SecurityService } from "./security.service";

export class SecurityResolver {
  constructor(protected readonly service: SecurityService) {}

  @graphql.Query(() => IpAddressDto)
  async GetIpAddresses(
    @graphql.Args()
    args: WebsiteScanDto
  ): Promise<IpAddressDto> {
    return this.service.GetIpAddresses(args);
  }

  @graphql.Query(() => OpenPortDto)
  async GetOpenPorts(
    @graphql.Args()
    args: WebsiteScanDto
  ): Promise<OpenPortDto> {
    return this.service.GetOpenPorts(args);
  }

  @graphql.Query(() => VulnerabilityDto)
  async GetVulnerabilities(
    @graphql.Args()
    args: WebsiteScanDto
  ): Promise<VulnerabilityDto> {
    return this.service.GetVulnerabilities(args);
  }

  @graphql.Mutation(() => WebsiteScanDto)
  async InitiateWebsiteScan(
    @graphql.Args()
    args: WebsiteScanDto
  ): Promise<WebsiteScanDto> {
    return this.service.InitiateWebsiteScan(args);
  }
}
