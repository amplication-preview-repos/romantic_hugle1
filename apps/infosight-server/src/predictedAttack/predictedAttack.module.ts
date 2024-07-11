import { Module } from "@nestjs/common";
import { PredictedAttackModuleBase } from "./base/predictedAttack.module.base";
import { PredictedAttackService } from "./predictedAttack.service";
import { PredictedAttackController } from "./predictedAttack.controller";
import { PredictedAttackResolver } from "./predictedAttack.resolver";

@Module({
  imports: [PredictedAttackModuleBase],
  controllers: [PredictedAttackController],
  providers: [PredictedAttackService, PredictedAttackResolver],
  exports: [PredictedAttackService],
})
export class PredictedAttackModule {}
