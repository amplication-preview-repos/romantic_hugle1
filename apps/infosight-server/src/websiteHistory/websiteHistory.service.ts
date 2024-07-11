import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WebsiteHistoryServiceBase } from "./base/websiteHistory.service.base";

@Injectable()
export class WebsiteHistoryService extends WebsiteHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
