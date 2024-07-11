import { Module } from "@nestjs/common";
import { SecurityService } from "./security.service";
import { SecurityController } from "./security.controller";
import { SecurityResolver } from "./security.resolver";

@Module({
  controllers: [SecurityController],
  providers: [SecurityService, SecurityResolver],
  exports: [SecurityService],
})
export class SecurityModule {}
