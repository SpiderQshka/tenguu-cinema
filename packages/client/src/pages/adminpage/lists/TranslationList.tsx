import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  Edit,
  SimpleForm,
  TextInput
} from "react-admin";

export const TranslationList = (props: any) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="ru" />
        <TextField source="en" />
        <EditButton />
      </Datagrid>
    </List>
  );
};
