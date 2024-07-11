import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PredictedAttackService } from "./predictedAttack.service";
import { PredictedAttackControllerBase } from "./base/predictedAttack.controller.base";

@swagger.ApiTags("predictedAttacks")
@common.Controller("predictedAttacks")
export class PredictedAttackController extends PredictedAttackControllerBase {
  constructor(protected readonly service: PredictedAttackService) {
    super(service);
  }
}
