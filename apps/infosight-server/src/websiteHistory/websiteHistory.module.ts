import { Module } from "@nestjs/common";
import { WebsiteHistoryModuleBase } from "./base/websiteHistory.module.base";
import { WebsiteHistoryService } from "./websiteHistory.service";
import { WebsiteHistoryController } from "./websiteHistory.controller";
import { WebsiteHistoryResolver } from "./websiteHistory.resolver";

@Module({
  imports: [WebsiteHistoryModuleBase],
  controllers: [WebsiteHistoryController],
  providers: [WebsiteHistoryService, WebsiteHistoryResolver],
  exports: [WebsiteHistoryService],
})
export class WebsiteHistoryModule {}
