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
  useQuery
} from "react-admin";
import { DateTimeInput } from "react-admin-date-inputs2";

const FilmName = ({ record }: any) => {
  const { data, error } = useQuery({
    type: "getOne",
    resource: "translations",
    payload: { id: record.name }
  });

  if (!data || error) return null;

  const names: string[] = [];
  for (let key in data) {
    if (key !== "id") names.push(`${key} - ${data[key]}`);
  }
  return (
    <ul>
      {names.map(name => (
        <li>{name}</li>
      ))}
    </ul>
  );
};

const HallName = ({ record }: any) => {
  const { data, error } = useQuery({
    type: "getOne",
    resource: "translations",
    payload: { id: record.name }
  });

  if (!data || error) return null;

  const names: string[] = [];
  for (let key in data) {
    if (key !== "id") names.push(`${key} - ${data[key]}`);
  }
  return (
    <ul>
      {names.map(name => (
        <li>{name}</li>
      ))}
    </ul>
  );
};

export const SessionList = (props: any) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <ReferenceField source="film" reference="films" title="film">
          <FilmName />
        </ReferenceField>
        <DateField source="dateTime" showTime />
        <NumberField source="price" />
        <ReferenceField source="hall" reference="halls" title="hall">
          <HallName />
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
        <DateTimeInput
          source="dateTime"
          label="Date and time"
          options={{
            format: "dd/mm/yyyy, HH:mm:ss",
            ampm: false,
            clearable: true
          }}
        />
        <NumberInput source="price" />
        <ReferenceInput source="hall" reference="halls">
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
        <ReferenceInput source="hall" reference="halls">
          <SelectInput optionText="name" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
