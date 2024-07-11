import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OpenPortService } from "./openPort.service";
import { OpenPortControllerBase } from "./base/openPort.controller.base";

@swagger.ApiTags("openPorts")
@common.Controller("openPorts")
export class OpenPortController extends OpenPortControllerBase {
  constructor(protected readonly service: OpenPortService) {
    super(service);
  }
}
