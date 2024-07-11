import { Module } from "@nestjs/common";
import { PreviousAttackHistoryModuleBase } from "./base/previousAttackHistory.module.base";
import { PreviousAttackHistoryService } from "./previousAttackHistory.service";
import { PreviousAttackHistoryController } from "./previousAttackHistory.controller";
import { PreviousAttackHistoryResolver } from "./previousAttackHistory.resolver";

@Module({
  imports: [PreviousAttackHistoryModuleBase],
  controllers: [PreviousAttackHistoryController],
  providers: [PreviousAttackHistoryService, PreviousAttackHistoryResolver],
  exports: [PreviousAttackHistoryService],
})
export class PreviousAttackHistoryModule {}
