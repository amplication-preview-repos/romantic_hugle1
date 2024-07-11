import { PredictedAttackWhereInput } from "./PredictedAttackWhereInput";
import { PredictedAttackOrderByInput } from "./PredictedAttackOrderByInput";

export type PredictedAttackFindManyArgs = {
  where?: PredictedAttackWhereInput;
  orderBy?: Array<PredictedAttackOrderByInput>;
  skip?: number;
  take?: number;
};
