import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const OpenPortEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="portNumber" source="portNumber" />
        <TextInput label="protocol" source="protocol" />
      </SimpleForm>
    </Edit>
  );
};
