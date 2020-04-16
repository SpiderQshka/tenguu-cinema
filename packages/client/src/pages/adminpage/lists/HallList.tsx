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
  ReferenceField,
  useLocale,
  useQuery,
  required,
  minLength,
  maxLength,
  minValue,
  maxValue,
} from "react-admin";
import { validation } from "../config";

const NameInput = (props: any) => {
  const locale = useLocale();
  const { data, error } = useQuery({
    type: "getOne",
    resource: "translations",
    payload: { id: props.record.name },
  });

  if (!data || error) return null;

  const label =
    props.lang === "ru"
      ? locale === "en"
        ? "Name, ru"
        : "Название, русск."
      : locale === "en"
      ? "Name, en"
      : "Название, англ.";

  return (
    <TextInput
      {...props}
      source={props.lang}
      label={label}
      validate={[
        required(),
        minLength(validation.hall.minNameSize),
        maxLength(validation.hall.maxNameSize),
      ]}
      value={data[props.lang]}
    />
  );
};

export const HallList = (props: any) => {
  const locale = useLocale();
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <ReferenceField
          source="name"
          label={locale === "en" ? "Name" : "Название"}
          reference="translations"
        >
          <TextField source={locale} />
        </ReferenceField>
        <NumberField
          source="numberOfRows"
          label={locale === "en" ? "Number of rows" : "Кол-во рядов"}
        />
        <NumberField
          source="seatsOnRow"
          label={locale === "en" ? "Seats on row" : "Мест в ряду"}
        />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export const HallEdit = (props: any) => {
  const locale = useLocale();
  return (
    <Edit {...props} undoable={false}>
      <SimpleForm>
        <NameInput lang="ru" />
        <NameInput lang="en" />
        <NumberInput
          source="numberOfRows"
          label={locale === "en" ? "Number of rows" : "Кол-во рядов"}
          validate={[
            required(),
            minValue(validation.hall.minRowsNumber),
            maxValue(validation.hall.maxRowsNumber),
          ]}
        />
        <NumberInput
          source="seatsOnRow"
          label={locale === "en" ? "Seats on row" : "Мест в ряду"}
          validate={[
            required(),
            minValue(validation.hall.minSeatsOnRowNumber),
            maxValue(validation.hall.maxSeatsOnRowNumber),
          ]}
        />
      </SimpleForm>
    </Edit>
  );
};

export const HallCreate = (props: any) => {
  const locale = useLocale();
  return (
    <Create {...props}>
      <SimpleForm>
        <NameInput lang="ru" />
        <NameInput lang="en" />
        <NumberInput
          source="numberOfRows"
          label={locale === "en" ? "Number of rows" : "Кол-во рядов"}
          validate={[
            required(),
            minValue(validation.hall.minRowsNumber),
            maxValue(validation.hall.maxRowsNumber),
          ]}
        />
        <NumberInput
          source="seatsOnRow"
          label={locale === "en" ? "Seats on row" : "Мест в ряду"}
          validate={[
            required(),
            minValue(validation.hall.minSeatsOnRowNumber),
            maxValue(validation.hall.maxSeatsOnRowNumber),
          ]}
        />
      </SimpleForm>
    </Create>
  );
};
