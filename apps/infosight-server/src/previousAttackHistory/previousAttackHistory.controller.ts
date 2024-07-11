import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PreviousAttackHistoryService } from "./previousAttackHistory.service";
import { PreviousAttackHistoryControllerBase } from "./base/previousAttackHistory.controller.base";

@swagger.ApiTags("previousAttackHistories")
@common.Controller("previousAttackHistories")
export class PreviousAttackHistoryController extends PreviousAttackHistoryControllerBase {
  constructor(protected readonly service: PreviousAttackHistoryService) {
    super(service);
  }
}
