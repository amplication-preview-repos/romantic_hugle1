import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PredictedAttackWhereInput = {
  id?: StringFilter;
  likelihood?: FloatNullableFilter;
  attackType?: StringNullableFilter;
};
