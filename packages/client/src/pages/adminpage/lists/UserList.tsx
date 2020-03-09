import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  NumberInput,
  ReferenceInput,
  SelectInput,
  EmailField,
  ReferenceArrayField,
  SingleFieldList,
  ChipField,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput
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
      <TextInput source="status" />
      <TextInput source="email" />
      <TextInput source="username" />
    </SimpleForm>
  </Create>
);
