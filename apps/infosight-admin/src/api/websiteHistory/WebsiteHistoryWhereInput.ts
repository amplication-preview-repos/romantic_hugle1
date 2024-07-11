import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type WebsiteHistoryWhereInput = {
  id?: StringFilter;
  changeDate?: DateTimeNullableFilter;
  change?: StringNullableFilter;
};
