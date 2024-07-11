import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type PreviousAttackHistoryWhereInput = {
  id?: StringFilter;
  attackType?: StringNullableFilter;
  description?: StringNullableFilter;
  date?: DateTimeNullableFilter;
};
