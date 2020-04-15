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
  minLength
} from "react-admin";

const NameInput = (props: any) => {
  const locale = useLocale();
  const { data, error } = useQuery({
    type: "getOne",
    resource: "translations",
    payload: { id: props.record.name }
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
    <Edit {...props}>
      <SimpleForm>
        <NameInput lang="ru" />
        <NameInput lang="en" />
        <NumberInput
          source="numberOfRows"
          label={locale === "en" ? "Number of rows" : "Кол-во рядов"}
          min={1}
        />
        <NumberInput
          source="seatsOnRow"
          label={locale === "en" ? "Seats on row" : "Мест в ряду"}
          min={1}
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
        />
        <NumberInput
          source="seatsOnRow"
          label={locale === "en" ? "Seats on row" : "Мест в ряду"}
        />
      </SimpleForm>
    </Create>
  );
};
