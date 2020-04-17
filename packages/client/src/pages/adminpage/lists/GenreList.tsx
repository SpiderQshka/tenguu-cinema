import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  TextInput,
  ReferenceField,
  useLocale,
  useQuery,
  required,
  minLength,
  maxLength,
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
        minLength(validation.genre.minNameSize),
        maxLength(validation.genre.maxNameSize),
      ]}
      defaultValue={data[props.lang]}
    />
  );
};

export const GenreList = (props: any) => {
  const locale = useLocale();
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <ReferenceField
          source="name"
          label={locale === "en" ? "Name" : "Название"}
          reference="translations"
          linkType={false}
        >
          <TextField source={locale} />
        </ReferenceField>
        <EditButton />
      </Datagrid>
    </List>
  );
};

export const GenreEdit = (props: any) => {
  return (
    <Edit {...props} undoable={false}>
      <SimpleForm>
        <NameInput lang="ru" />
        <NameInput lang="en" />
      </SimpleForm>
    </Edit>
  );
};

export const GenreCreate = (props: any) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NameInput lang="ru" />
        <NameInput lang="en" />
      </SimpleForm>
    </Create>
  );
};
