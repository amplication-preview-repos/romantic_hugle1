import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const PredictedAttackEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="likelihood" source="likelihood" />
        <TextInput label="attackType" source="attackType" />
      </SimpleForm>
    </Edit>
  );
};
