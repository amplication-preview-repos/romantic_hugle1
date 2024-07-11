import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type WebsiteScanWhereInput = {
  id?: StringFilter;
  url?: StringNullableFilter;
  scanDate?: DateTimeNullableFilter;
};
