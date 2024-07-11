import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WebsiteScanServiceBase } from "./base/websiteScan.service.base";

@Injectable()
export class WebsiteScanService extends WebsiteScanServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
