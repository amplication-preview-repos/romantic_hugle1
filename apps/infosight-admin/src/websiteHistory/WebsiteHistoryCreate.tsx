import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const WebsiteHistoryCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="changeDate" source="changeDate" />
        <TextInput label="change" multiline source="change" />
      </SimpleForm>
    </Create>
  );
};
