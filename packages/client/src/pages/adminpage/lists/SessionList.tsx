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
  ReferenceField,
  ReferenceArrayInput,
  ChipField
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
        <ReferenceArrayInput source="film" reference="films">
          <SelectInput>
            <ChipField source="name" />
          </SelectInput>
        </ReferenceArrayInput>
        <DateInput source="dateTime" />
        <NumberInput source="price" />
        <ReferenceInput source="hall" reference="halls">
          <SelectInput source="name" />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

export const SessionCreate = (props: any) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="film" reference="films">
          <SelectInput optionText="id" />
        </ReferenceArrayInput>
        <DateInput source="dateTime" />
        <NumberInput source="price" />
        <ReferenceArrayInput source="hall" reference="halls">
          <SelectInput source="name" />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
