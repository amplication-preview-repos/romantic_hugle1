import { Module } from "@nestjs/common";
import { OpenPortModuleBase } from "./base/openPort.module.base";
import { OpenPortService } from "./openPort.service";
import { OpenPortController } from "./openPort.controller";
import { OpenPortResolver } from "./openPort.resolver";

@Module({
  imports: [OpenPortModuleBase],
  controllers: [OpenPortController],
  providers: [OpenPortService, OpenPortResolver],
  exports: [OpenPortService],
})
export class OpenPortModule {}
