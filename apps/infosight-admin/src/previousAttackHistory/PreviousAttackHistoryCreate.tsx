import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const PreviousAttackHistoryCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="attackType" source="attackType" />
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="date" source="date" />
      </SimpleForm>
    </Create>
  );
};
