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
  DateField,
  DateInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  ReferenceField
} from "react-admin";

export const SessionList = (props: any) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <ReferenceField source="filmId" reference="films" title="film">
          <TextField source="name" />
        </ReferenceField>
        <DateField source="dateTime" showTime />
        <NumberField source="price" />
        <ReferenceField source="hallId" reference="halls" title="hall">
          <TextField source="name" />
        </ReferenceField>
        <EditButton />
      </Datagrid>
    </List>
  );
};

export const SessionEdit = (props: any) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="filmId" reference="films">
          <SelectInput source="name" />
        </ReferenceInput>
        <DateInput source="dateTime" />
        <NumberInput source="price" />
        <ReferenceInput source="hallId" reference="halls">
          <SelectInput source="name" />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

export const SessionCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="filmId" reference="films">
        <SelectInput source="name" />
      </ReferenceInput>
      <DateInput source="dateTime" />
      <NumberInput source="price" />
      <ReferenceInput source="hallId" reference="halls">
        <SelectInput source="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
