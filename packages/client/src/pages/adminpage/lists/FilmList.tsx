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
  ReferenceField,
  LongTextInput
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

export const FilmList = (props: any) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <ReferenceField source="name" label="ru" reference="translations">
          <TextField source="ru" />
        </ReferenceField>
        <ReferenceField source="name" label="en" reference="translations">
          <TextField source="en" />
        </ReferenceField>
        <ReferenceArrayField source="genres" reference="translations">
          {/* <ReferenceArrayField source="name" reference="translations"> */}
          <SingleFieldList>
            <ChipField source="en" />
          </SingleFieldList>
          {/* </ReferenceArrayField> */}
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
        <RichTextField source="descRu" label="description (ru)" />
        <RichTextField source="descEn" label="description (en)" />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export const FilmEdit = (props: any) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="nameRu" label="Name (ru)" />
        <TextInput source="nameEn" label="Name (en)" />
        <ReferenceArrayInput source="genreIds" reference="genres">
          <SelectArrayInput label="Genres">
            <ChipField source="name" />
          </SelectArrayInput>
        </ReferenceArrayInput>
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
        <RichTextInput source="descRu" label="description (ru)" />
        <RichTextInput source="descEn" label="description (en)" />
      </SimpleForm>
    </Edit>
  );
};

export const FilmCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="nameRu" label="Name (ru)" />
      <TextInput source="nameEn" label="Name (en)" />
      <ReferenceArrayInput source="genreIds" reference="genres">
        <SelectArrayInput label="Genres">
          <ChipField source="name" />
        </SelectArrayInput>
      </ReferenceArrayInput>
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
      <RichTextInput source="descRu" label="description (ru)" />
      <RichTextInput source="descEn" label="description (en)" />
    </SimpleForm>
  </Create>
);
