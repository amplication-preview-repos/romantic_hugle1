import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const PredictedAttackCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="likelihood" source="likelihood" />
        <TextInput label="attackType" source="attackType" />
      </SimpleForm>
    </Create>
  );
};
