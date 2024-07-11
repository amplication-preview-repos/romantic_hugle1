import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WebsiteScanService } from "./websiteScan.service";
import { WebsiteScanControllerBase } from "./base/websiteScan.controller.base";

@swagger.ApiTags("websiteScans")
@common.Controller("websiteScans")
export class WebsiteScanController extends WebsiteScanControllerBase {
  constructor(protected readonly service: WebsiteScanService) {
    super(service);
  }
}
