import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const OpenPortCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="portNumber" source="portNumber" />
        <TextInput label="protocol" source="protocol" />
      </SimpleForm>
    </Create>
  );
};
