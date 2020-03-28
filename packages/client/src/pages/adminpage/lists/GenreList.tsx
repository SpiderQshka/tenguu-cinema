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
  useLocale
} from "react-admin";

export const GenreList = (props: any) => {
  const locale = useLocale();
  console.log(locale);

  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <ReferenceField
          source="name"
          label={locale === "en" ? "Name (ru)" : "Имя (русск.)"}
          reference="translations"
          linkType={false}
        >
          <TextField source="ru" />
        </ReferenceField>
        <ReferenceField
          source="name"
          label="en"
          reference="translations"
          linkType={false}
        >
          <TextField source="en" />
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
        <TextInput source="ru" label="Name (ru)" />
        <TextInput source="en" label="Name (en)" />
      </SimpleForm>
    </Edit>
  );
};

export const GenreCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="ru" label="Name (ru)" />
      <TextInput source="en" label="Name (en)" />
    </SimpleForm>
  </Create>
);
