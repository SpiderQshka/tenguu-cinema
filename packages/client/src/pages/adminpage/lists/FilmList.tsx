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
  ImageField,
  ReferenceInput,
  useQuery
} from "react-admin";
import { Chip } from "@material-ui/core";
import RichTextInput from "ra-input-rich-text";
import styles from "../styles.module.sass";

const FilmName = ({ record }: any) => {
  const { data, error } = useQuery({
    type: "getOne",
    resource: "translations",
    payload: { id: record.name }
  });

  if (!data || error) return null;

  const names: string[] = [];
  for (let key in data) {
    if (key !== "id") names.push(`${key}: ${data[key]}`);
  }
  return (
    <ul>
      {names.map(name => (
        <li className={styles.filmNameListItem}>
          <Chip label={name} />
        </li>
      ))}
    </ul>
  );
};

const GenreName = ({ record }: any) => {
  const { data, error } = useQuery({
    type: "getOne",
    resource: "translations",
    payload: { id: record.name }
  });

  if (!data || error) return null;

  const names: string[] = [];
  for (let key in data) {
    if (key !== "id") names.push(`${key}: ${data[key]}`);
  }
  return <Chip label={names.reduce((prev, curr) => `${prev}; \n${curr}`)} />;
};

const Description = ({ record }: any) => {
  const { data, error } = useQuery({
    type: "getOne",
    resource: "translations",
    payload: { id: record.description }
  });

  if (!data || error) return null;

  const descriptions: string[] = [];
  for (let key in data) {
    if (key !== "id") descriptions.push(`${key}:\n ${data[key]}`);
  }
  return (
    <ul>
      {descriptions.map(desc => (
        <li className={styles.descriptionListItem}>{desc}</li>
      ))}
    </ul>
  );
};

export const FilmList = (props: any) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <FilmName label="Name" />
        <ReferenceArrayField reference="genres" source="genres">
          <SingleFieldList>
            <GenreName />
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
        <Description label="Description" />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export const FilmEdit = (props: any) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput reference="translations" source="name">
          <TextInput source="en" optionText="ru" />
        </ReferenceInput>

        <TextInput source="nameEn" label="Name (en)" />
        <ReferenceArrayInput source="genres" reference="genres">
          <SelectArrayInput optionText="name" />
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
      <ReferenceArrayInput source="genres" reference="genres">
        <SelectArrayInput optionText="name" />
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
