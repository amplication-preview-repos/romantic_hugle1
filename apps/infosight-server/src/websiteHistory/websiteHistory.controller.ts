import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WebsiteHistoryService } from "./websiteHistory.service";
import { WebsiteHistoryControllerBase } from "./base/websiteHistory.controller.base";

@swagger.ApiTags("websiteHistories")
@common.Controller("websiteHistories")
export class WebsiteHistoryController extends WebsiteHistoryControllerBase {
  constructor(protected readonly service: WebsiteHistoryService) {
    super(service);
  }
}
