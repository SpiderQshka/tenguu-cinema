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
  NumberInput,
  ReferenceInput,
  SelectInput,
  ReferenceField,
  useQuery,
  useLocale,
  required,
} from "react-admin";
import { DateTimeInput } from "react-admin-date-inputs2";

const HallInput = (props: any) => {
  const locale = useLocale() as "ru" | "en";
  const { data, error } = useQuery({
    type: "getMany",
    resource: "translations",
    payload: { ids: props.choices.map((choice: any) => choice.name) },
  });

  if (!data || error) return null;

  const choices = data
    .map((obj: { ru: string; en: string; id: string }) => {
      const result = props.choices.filter(
        (choice: { name: string; id: string }) => choice.name === obj.id
      );
      return result[0] ? { name: obj[locale], id: result[0].id } : null;
    })
    .filter((el: any) => el);

  return <SelectInput validate={[required()]} {...props} choices={choices} />;
};

const FilmInput = (props: any) => {
  const locale = useLocale() as "ru" | "en";
  const { data, error } = useQuery({
    type: "getMany",
    resource: "translations",
    payload: { ids: props.choices.map((choice: any) => choice.name) },
  });

  if (!data || error) return null;

  const choices = data
    .map((obj: { ru: string; en: string; id: string }) => {
      const result = props.choices.filter(
        (choice: { name: string; id: string }) => choice.name === obj.id
      );
      return result[0] ? { name: obj[locale], id: result[0].id } : null;
    })
    .filter((el: any) => el);

  return <SelectInput validate={[required()]} {...props} choices={choices} />;
};
const FilmName = ({ record }: any) => {
  const locale = useLocale();
  const { data, error } = useQuery({
    type: "getOne",
    resource: "translations",
    payload: { id: record.name },
  });

  if (!data || error) return null;

  return <p>{data[locale] ? data[locale] : "I18n error."}</p>;
};

const HallName = ({ record }: any) => {
  const locale = useLocale();
  const { data, error } = useQuery({
    type: "getOne",
    resource: "translations",
    payload: { id: record.name },
  });

  if (!data || error) return null;

  return <p>{data[locale] ? data[locale] : "I18n error."}</p>;
};

export const SessionList = (props: any) => {
  return (
    <List {...props} perPage={50} exporter={false}>
      <Datagrid>
        <TextField source="id" />
        <ReferenceField source="film" reference="films">
          <FilmName />
        </ReferenceField>
        <DateField source="dateTime" showTime />
        <NumberField source="price" />
        <ReferenceField source="hall" reference="halls">
          <HallName />
        </ReferenceField>
        <EditButton />
      </Datagrid>
    </List>
  );
};

export const SessionEdit = (props: any) => {
  return (
    <Edit {...props} undoable={false}>
      <SimpleForm>
        <ReferenceInput source="film" reference="films">
          <FilmInput />
        </ReferenceInput>
        <DateTimeInput
          validate={[required()]}
          source="dateTime"
          options={{
            format: "dd/mm/yyyy, HH:mm:ss",
            ampm: false,
            clearable: true,
          }}
        />
        <NumberInput validate={[required()]} source="price" />
        <ReferenceInput source="hall" reference="halls">
          <HallInput />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

export const SessionCreate = (props: any) => {
  const locale = useLocale();

  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="film" reference="films">
          <FilmInput />
        </ReferenceInput>
        <DateTimeInput
          validate={[required()]}
          source="dateTime"
          label={locale === "ru" ? "Дата & Время" : "Date & Time"}
          options={{
            format: "dd/mm/yyyy, HH:mm:ss",
            ampm: false,
            clearable: true,
          }}
        />
        <NumberInput validate={[required()]} source="price" />
        <ReferenceInput source="hall" reference="halls">
          <HallInput />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
