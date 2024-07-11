import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { SecurityService } from "./security.service";
import { WebsiteScanDto } from "../security/WebsiteScanDto";
import { IpAddressDto } from "../security/IpAddressDto";
import { OpenPortDto } from "../security/OpenPortDto";
import { VulnerabilityDto } from "../security/VulnerabilityDto";

@swagger.ApiTags("securities")
@common.Controller("securities")
export class SecurityController {
  constructor(protected readonly service: SecurityService) {}

  @common.Get("/scan/:id/ip_addresses")
  @swagger.ApiOkResponse({
    type: IpAddressDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetIpAddresses(
    @common.Body()
    body: WebsiteScanDto
  ): Promise<IpAddressDto> {
        return this.service.GetIpAddresses(body);
      }

  @common.Get("/scan/:id/open_ports")
  @swagger.ApiOkResponse({
    type: OpenPortDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetOpenPorts(
    @common.Body()
    body: WebsiteScanDto
  ): Promise<OpenPortDto> {
        return this.service.GetOpenPorts(body);
      }

  @common.Get("/scan/:id/vulnerabilities")
  @swagger.ApiOkResponse({
    type: VulnerabilityDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetVulnerabilities(
    @common.Body()
    body: WebsiteScanDto
  ): Promise<VulnerabilityDto> {
        return this.service.GetVulnerabilities(body);
      }

  @common.Post("/scan")
  @swagger.ApiOkResponse({
    type: WebsiteScanDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async InitiateWebsiteScan(
    @common.Body()
    body: WebsiteScanDto
  ): Promise<WebsiteScanDto> {
        return this.service.InitiateWebsiteScan(body);
      }
}
