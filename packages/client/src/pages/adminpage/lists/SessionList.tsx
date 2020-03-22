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
        <ReferenceField source="film" reference="films" title="film">
          <TextField source="name" />
        </ReferenceField>
        <DateField source="dateTime" showTime />
        <NumberField source="price" />
        <ReferenceField source="hall" reference="halls" title="hall">
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
        <ReferenceInput source="film" reference="films">
          <SelectInput optionText="name" />
        </ReferenceInput>
        <DateInput source="dateTime" />
        <NumberInput source="price" />
        <ReferenceInput source="genre" reference="genres">
          <SelectInput optionText="name" />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

export const SessionCreate = (props: any) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="film" reference="films">
          <SelectInput optionText="name" />
        </ReferenceInput>
        <DateInput source="dateTime" />
        <NumberInput source="price" />
        <ReferenceInput source="genre" reference="genres">
          <SelectInput optionText="name" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
