import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PredictedAttackServiceBase } from "./base/predictedAttack.service.base";

@Injectable()
export class PredictedAttackService extends PredictedAttackServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
