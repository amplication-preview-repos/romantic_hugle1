import { Injectable } from "@nestjs/common";
import { WebsiteScanDto } from "../security/WebsiteScanDto";
import { IpAddressDto } from "../security/IpAddressDto";
import { OpenPortDto } from "../security/OpenPortDto";
import { VulnerabilityDto } from "../security/VulnerabilityDto";

@Injectable()
export class SecurityService {
  constructor() {}
  async GetIpAddresses(args: WebsiteScanDto): Promise<IpAddressDto> {
    throw new Error("Not implemented");
  }
  async GetOpenPorts(args: WebsiteScanDto): Promise<OpenPortDto> {
    throw new Error("Not implemented");
  }
  async GetVulnerabilities(args: WebsiteScanDto): Promise<VulnerabilityDto> {
    throw new Error("Not implemented");
  }
  async InitiateWebsiteScan(args: WebsiteScanDto): Promise<WebsiteScanDto> {
    throw new Error("Not implemented");
  }
}
