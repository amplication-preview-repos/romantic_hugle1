import { Module } from "@nestjs/common";
import { WebsiteScanModuleBase } from "./base/websiteScan.module.base";
import { WebsiteScanService } from "./websiteScan.service";
import { WebsiteScanController } from "./websiteScan.controller";
import { WebsiteScanResolver } from "./websiteScan.resolver";

@Module({
  imports: [WebsiteScanModuleBase],
  controllers: [WebsiteScanController],
  providers: [WebsiteScanService, WebsiteScanResolver],
  exports: [WebsiteScanService],
})
export class WebsiteScanModule {}
