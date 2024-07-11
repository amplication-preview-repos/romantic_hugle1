import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type OpenPortWhereInput = {
  id?: StringFilter;
  portNumber?: IntNullableFilter;
  protocol?: StringNullableFilter;
};
