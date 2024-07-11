import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const PreviousAttackHistoryEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="attackType" source="attackType" />
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="date" source="date" />
      </SimpleForm>
    </Edit>
  );
};
