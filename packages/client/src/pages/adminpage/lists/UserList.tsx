import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  EmailField,
  ReferenceArrayField,
  SingleFieldList,
  ChipField,
  TextInput,
  SelectInput,
  PasswordInput
} from "react-admin";

export const UserList = (props: any) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="status" />
        <EmailField source="email" />
        <TextField source="username" />
        <TextField source="photo" />
        <ReferenceArrayField source="ticketIds" reference="tickets">
          <SingleFieldList>
            <ChipField source="id" />
          </SingleFieldList>
        </ReferenceArrayField>
        <EditButton />
      </Datagrid>
    </List>
  );
};

export const UserEdit = (props: any) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="status" />
        <TextInput source="email" />
        <TextInput source="username" />
      </SimpleForm>
    </Edit>
  );
};

export const UserCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm>
      <SelectInput
        source="status"
        choices={[
          { id: "default", name: "Default" },
          { id: "manager", name: "Manager" }
        ]}
      />
      <TextInput source="email" />
      <TextInput source="username" />
      <PasswordInput source="password" />
    </SimpleForm>
  </Create>
);
