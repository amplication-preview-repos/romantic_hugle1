import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type IpAddressWhereInput = {
  id?: StringFilter;
  typeField?: "Option1";
  address?: StringNullableFilter;
};
