import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PreviousAttackHistoryServiceBase } from "./base/previousAttackHistory.service.base";

@Injectable()
export class PreviousAttackHistoryService extends PreviousAttackHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
