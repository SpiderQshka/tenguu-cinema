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
  UrlField,
  SimpleFormIterator,
  SingleFieldList,
  ChipField,
  ArrayField,
  DateField,
  ArrayInput,
  DateInput,
  NumberInput,
  RichTextField,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceArrayField,
  RichTextInput
} from "react-admin";

export const FilmList = (props: any) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <ReferenceArrayField source="genreIds" reference="genres">
          <SingleFieldList>
            <ChipField source="name" />
          </SingleFieldList>
        </ReferenceArrayField>
        <NumberField source="duration" />
        <UrlField source="trailerLink" />
        <TextField source="filmImage" />
        <ArrayField source="ratings">
          <SingleFieldList>
            <ChipField source="ratingValue" />
          </SingleFieldList>
        </ArrayField>
        <DateField source="releaseDate" />
        <RichTextField source="description" />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export const FilmEdit = (props: any) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="genreIds" reference="genres">
          <SelectArrayInput label="Genres">
            <ChipField source="name" />
          </SelectArrayInput>
        </ReferenceArrayInput>
        <TextInput source="name" />
        <NumberInput source="duration" />
        <TextInput source="trailerLink" />
        {/* <ImageInput source="pictures" label="Related pictures" accept="image/*">
          <ImageField source="src" title="title" />
        </ImageInput> */}

        <ArrayInput source="ratings">
          <SimpleFormIterator>
            <TextInput source="raterName" label="Rater name" />
            <NumberInput source="ratingValue" label="Rating value" />
          </SimpleFormIterator>
        </ArrayInput>
        <DateInput source="releaseDate" />
        <TextInput source="description" />
      </SimpleForm>
    </Edit>
  );
};

export const FilmCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceArrayInput source="genreIds" reference="genres">
        <SelectArrayInput label="Genres">
          <ChipField source="name" />
        </SelectArrayInput>
      </ReferenceArrayInput>
      <TextInput source="name" />
      <NumberInput source="duration" />
      <TextInput source="trailerLink" />
      {/* <ImageInput source="pictures" label="Related pictures" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput> */}

      <ArrayInput source="ratings">
        <SimpleFormIterator>
          <TextInput source="raterName" label="Rater name" />
          <NumberInput source="ratingValue" label="Rating value" />
        </SimpleFormIterator>
      </ArrayInput>
      <DateInput source="releaseDate" />
      <TextInput source="description" />
    </SimpleForm>
  </Create>
);
