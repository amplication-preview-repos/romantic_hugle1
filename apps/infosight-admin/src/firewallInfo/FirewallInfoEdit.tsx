import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const FirewallInfoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="firewallName" source="firewallName" />
        <TextInput label="details" multiline source="details" />
      </SimpleForm>
    </Edit>
  );
};
