import { Module } from "@nestjs/common";
import { FirewallInfoModuleBase } from "./base/firewallInfo.module.base";
import { FirewallInfoService } from "./firewallInfo.service";
import { FirewallInfoController } from "./firewallInfo.controller";
import { FirewallInfoResolver } from "./firewallInfo.resolver";

@Module({
  imports: [FirewallInfoModuleBase],
  controllers: [FirewallInfoController],
  providers: [FirewallInfoService, FirewallInfoResolver],
  exports: [FirewallInfoService],
})
export class FirewallInfoModule {}
