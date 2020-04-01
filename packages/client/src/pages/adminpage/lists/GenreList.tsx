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
  useQuery
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
      source="ru"
      label={label}
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
    <Edit {...props}>
      <SimpleForm>
        <NameInput lang="ru" />
        <NameInput lang="en" />
      </SimpleForm>
    </Edit>
  );
};

export const GenreCreate = (props: any) => {
  const locale = useLocale();
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput
          source="en"
          label={locale === "en" ? "Name, en" : "Название, англ."}
        />
        <TextInput
          source="ru"
          label={locale === "en" ? "Name, ru" : "Название, русск."}
        />
      </SimpleForm>
    </Create>
  );
};
