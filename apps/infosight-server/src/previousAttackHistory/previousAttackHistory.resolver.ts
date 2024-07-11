import * as graphql from "@nestjs/graphql";
import { PreviousAttackHistoryResolverBase } from "./base/previousAttackHistory.resolver.base";
import { PreviousAttackHistory } from "./base/PreviousAttackHistory";
import { PreviousAttackHistoryService } from "./previousAttackHistory.service";

@graphql.Resolver(() => PreviousAttackHistory)
export class PreviousAttackHistoryResolver extends PreviousAttackHistoryResolverBase {
  constructor(protected readonly service: PreviousAttackHistoryService) {
    super(service);
  }
}
