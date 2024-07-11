import * as graphql from "@nestjs/graphql";
import { PredictedAttackResolverBase } from "./base/predictedAttack.resolver.base";
import { PredictedAttack } from "./base/PredictedAttack";
import { PredictedAttackService } from "./predictedAttack.service";

@graphql.Resolver(() => PredictedAttack)
export class PredictedAttackResolver extends PredictedAttackResolverBase {
  constructor(protected readonly service: PredictedAttackService) {
    super(service);
  }
}
