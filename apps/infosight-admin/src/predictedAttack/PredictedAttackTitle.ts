import { PredictedAttack as TPredictedAttack } from "../api/predictedAttack/PredictedAttack";

export const PREDICTEDATTACK_TITLE_FIELD = "attackType";

export const PredictedAttackTitle = (record: TPredictedAttack): string => {
  return record.attackType?.toString() || String(record.id);
};
