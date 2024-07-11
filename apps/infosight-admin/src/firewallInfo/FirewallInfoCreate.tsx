import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const FirewallInfoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="firewallName" source="firewallName" />
        <TextInput label="details" multiline source="details" />
      </SimpleForm>
    </Create>
  );
};
