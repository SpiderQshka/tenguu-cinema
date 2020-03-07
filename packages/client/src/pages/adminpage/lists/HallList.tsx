import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  NumberField,
  Edit,
  SimpleForm,
  Create,
  TextInput,
  NumberInput
} from "react-admin";

export const HallList = (props: any) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <NumberField source="numberOfRows" />
        <NumberField source="seatsOnRow" />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export const HallEdit = (props: any) => {
  console.log(props);

  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <NumberInput source="numberOfRows" />
        <NumberInput source="seatsOnRow" />
      </SimpleForm>
    </Edit>
  );
};

export const HallCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <NumberInput source="numberOfRows" />
      <NumberInput source="seatsOnRow" />
    </SimpleForm>
  </Create>
);
