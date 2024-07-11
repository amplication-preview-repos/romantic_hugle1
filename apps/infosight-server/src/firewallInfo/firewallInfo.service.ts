import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FirewallInfoServiceBase } from "./base/firewallInfo.service.base";

@Injectable()
export class FirewallInfoService extends FirewallInfoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
