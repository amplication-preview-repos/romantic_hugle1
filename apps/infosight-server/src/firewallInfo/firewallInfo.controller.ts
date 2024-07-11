import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FirewallInfoService } from "./firewallInfo.service";
import { FirewallInfoControllerBase } from "./base/firewallInfo.controller.base";

@swagger.ApiTags("firewallInfos")
@common.Controller("firewallInfos")
export class FirewallInfoController extends FirewallInfoControllerBase {
  constructor(protected readonly service: FirewallInfoService) {
    super(service);
  }
}
