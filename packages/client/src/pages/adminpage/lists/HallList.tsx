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
  NumberInput,
  ReferenceField
} from "react-admin";

export const HallList = (props: any) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <ReferenceField source="name" label="ru" reference="translations">
          <TextField source="ru" />
        </ReferenceField>
        <ReferenceField source="name" label="en" reference="translations">
          <TextField source="en" />
        </ReferenceField>
        <NumberField source="numberOfRows" />
        <NumberField source="seatsOnRow" />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export const HallEdit = (props: any) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="ru" label="Name (ru)" />
        <TextInput source="en" label="Name (en)" />
        <NumberInput source="numberOfRows" />
        <NumberInput source="seatsOnRow" />
      </SimpleForm>
    </Edit>
  );
};

export const HallCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="ru" label="Name (ru)" />
      <TextInput source="en" label="Name (en)" />
      <NumberInput source="numberOfRows" />
      <NumberInput source="seatsOnRow" />
    </SimpleForm>
  </Create>
);
