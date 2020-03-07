import React, { cloneElement } from "react";
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
  UrlField,
  ReferenceArrayField,
  SingleFieldList,
  ChipField,
  ArrayField,
  DateField
} from "react-admin";

export const FilmList = (props: any) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <ArrayField source="genres">
          <SingleFieldList>
            <ChipField source="name" />
          </SingleFieldList>
        </ArrayField>
        <NumberField source="duration" />
        <UrlField source="trailerLink" />
        <TextField source="filmImage" />
        <ArrayField source="ratings">
          <SingleFieldList>
            <ChipField source="ratingValue" />
          </SingleFieldList>
        </ArrayField>
        <DateField source="releaseDate" />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export const GenreEdit = (props: any) => {
  console.log(props);

  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="name" />
      </SimpleForm>
    </Edit>
  );
};

export const GenreCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
    </SimpleForm>
  </Create>
);
