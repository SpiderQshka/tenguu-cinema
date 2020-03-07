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
  SelectInput,
  TextInput,
  NumberInput
} from "react-admin";

export const TicketList = (props: any) => {
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

export const TicketEdit = (props: any) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="name" />
        <NumberInput source="numberOfRows" />
        <NumberInput source="seatsOnRow" />
      </SimpleForm>
    </Edit>
  );
};

export const TicketCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <NumberInput source="numberOfRows" />
      <NumberInput source="seatsOnRow" />
    </SimpleForm>
  </Create>
);
