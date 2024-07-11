import { PreviousAttackHistory as TPreviousAttackHistory } from "../api/previousAttackHistory/PreviousAttackHistory";

export const PREVIOUSATTACKHISTORY_TITLE_FIELD = "attackType";

export const PreviousAttackHistoryTitle = (
  record: TPreviousAttackHistory
): string => {
  return record.attackType?.toString() || String(record.id);
};
