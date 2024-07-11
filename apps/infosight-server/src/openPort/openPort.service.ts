import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OpenPortServiceBase } from "./base/openPort.service.base";

@Injectable()
export class OpenPortService extends OpenPortServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
