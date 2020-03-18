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
  ImageInput,
  ImageField
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

export const FilmList = (props: any) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <ReferenceField
          source="name"
          label="ru"
          reference="translations"
          link={false}
        >
          <TextField source="ru" />
        </ReferenceField>
        <ReferenceField
          source="name"
          label="en"
          reference="translations"
          link={false}
        >
          <TextField source="en" />
        </ReferenceField>
        <ReferenceArrayField source="genres" reference="translations">
          <SingleFieldList>
            <ChipField source="ru" />
          </SingleFieldList>
        </ReferenceArrayField>
        <NumberField source="duration" />
        <UrlField source="trailerLink" />
        <ImageField source="filmImage" />
        <ArrayField source="ratings" link={false}>
          <SingleFieldList>
            <ChipField source="ratingValue" />
          </SingleFieldList>
        </ArrayField>
        <DateField source="releaseDate" />
        <ReferenceField
          source="description"
          label="description (ru)"
          reference="translations"
          link={false}
        >
          <RichTextField source="ru" />
        </ReferenceField>
        <ReferenceField
          source="description"
          label="description (en)"
          reference="translations"
          link={false}
        >
          <RichTextField source="en" />
        </ReferenceField>

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

        <ArrayInput source="ratings">
          <SimpleFormIterator>
            <TextInput source="raterName" label="Rater name" />
            <NumberInput source="ratingValue" label="Rating value" />
          </SimpleFormIterator>
        </ArrayInput>
        <ImageInput source="filmImage" accept="image/*" multiple={false}>
          <ImageField source="src" title="title" />
        </ImageInput>

        <DateInput source="releaseDate" />
        <RichTextInput source="descRu" label="description (ru)" toolbar={[]} />
        <RichTextInput source="descEn" label="description (en)" toolbar={[]} />
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
          <ChipField source="name" />;
        </SelectArrayInput>
      </ReferenceArrayInput>
      <NumberInput source="duration" />
      <TextInput source="trailerLink" />
      <ImageInput source="filmImage" accept="image/*" multiple={false}>
        <ImageField source="src" title="title" />
      </ImageInput>

      <ArrayInput source="ratings">
        <SimpleFormIterator>
          <TextInput source="raterName" label="Rater name" />
          <NumberInput source="ratingValue" label="Rating value" />
        </SimpleFormIterator>
      </ArrayInput>
      <DateInput source="releaseDate" />
      <RichTextInput source="descRu" label="description (ru)" toolbar={[]} />
      <RichTextInput source="descEn" label="description (en)" toolbar={[]} />
    </SimpleForm>
  </Create>
);
