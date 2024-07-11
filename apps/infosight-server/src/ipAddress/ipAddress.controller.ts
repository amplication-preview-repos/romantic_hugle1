import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { IpAddressService } from "./ipAddress.service";
import { IpAddressControllerBase } from "./base/ipAddress.controller.base";

@swagger.ApiTags("ipAddresses")
@common.Controller("ipAddresses")
export class IpAddressController extends IpAddressControllerBase {
  constructor(protected readonly service: IpAddressService) {
    super(service);
  }
}
