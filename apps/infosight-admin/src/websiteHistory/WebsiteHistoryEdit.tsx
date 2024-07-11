import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const WebsiteHistoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="changeDate" source="changeDate" />
        <TextInput label="change" multiline source="change" />
      </SimpleForm>
    </Edit>
  );
};
