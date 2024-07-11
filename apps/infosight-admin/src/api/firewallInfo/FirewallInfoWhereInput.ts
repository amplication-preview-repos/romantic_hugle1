import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type FirewallInfoWhereInput = {
  id?: StringFilter;
  firewallName?: StringNullableFilter;
  details?: StringNullableFilter;
};
