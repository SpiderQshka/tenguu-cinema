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
  ReferenceArrayInput,
  SelectArrayInput,
  useLocale,
  ImageInput,
  ImageField,
  useQuery,
  required,
  minLength,
  maxLength,
  minValue,
  maxValue,
} from "react-admin";
import { validation } from "../config";
import { Chip } from "@material-ui/core";
import RichTextInput from "ra-input-rich-text";

const NameInput = (props: any) => {
  const { data, error } = useQuery({
    type: "getOne",
    resource: "translations",
    payload: { id: props.record.name },
  });

  if (!data || error) return null;

  return (
    <TextInput
      {...props}
      validate={[
        required(),
        minLength(validation.film.minNameSize),
        maxLength(validation.film.maxNameSize),
      ]}
      initialValue={data[props.lang]}
      source={`name${props.lang === "en" ? "En" : "Ru"}`}
    />
  );
};

const GenreInput = (props: any) => {
  const locale = useLocale() as "ru" | "en";
  const { data, error } = useQuery({
    type: "getMany",
    resource: "translations",
    payload: { ids: props.choices.map((choice: any) => choice.name) },
  });

  if (!data || error) return null;
  const choices = data
    .map((obj: { ru: string; en: string; id: string }) => {
      const result = props.choices.filter(
        (choice: { name: string; id: string }) => choice.name === obj.id
      );
      return result[0] ? { name: obj[locale], id: result[0].id } : null;
    })
    .filter((el: any) => el);

  return (
    <SelectArrayInput
      {...props}
      choices={choices}
      validate={[required()]}
      optionText="name"
    />
  );
};

const DescriptionInput = (props: any) => {
  const { data, error } = useQuery({
    type: "getOne",
    resource: "translations",
    payload: { id: props.record.description },
  });

  if (!data || error) return null;

  return (
    <RichTextInput
      {...props}
      toolbar={[]}
      source={`desc${props.lang === "en" ? "En" : "Ru"}`}
      defaultValue={data[props.lang]}
    />
  );
};

const FilmName = ({ record }: any) => {
  const locale = useLocale();
  const { data, error } = useQuery({
    type: "getOne",
    resource: "translations",
    payload: { id: record.name },
  });

  if (!data || error) return null;
  return <p>{data[locale] ? data[locale] : "I18n error."}</p>;
};

const GenreName = (props: any) => {
  const locale = useLocale();

  const { data, error } = useQuery({
    type: "getOne",
    resource: "translations",
    payload: { id: props.record },
  });

  if (!data || error) return null;

  return (
    <Chip
      style={{ marginRight: "5px", marginBottom: "5px" }}
      label={data[locale] ? data[locale] : "I18n error."}
    />
  );
};

const Description = ({ record }: any) => {
  const locale = useLocale();
  const { data, error } = useQuery({
    type: "getOne",
    resource: "translations",
    payload: { id: record.description },
  });

  if (!data || error) return null;

  return (
    <p style={{ minWidth: "300px" }}>
      {data[locale] ? data[locale] : "I18n error."}
    </p>
  );
};

export const FilmList = (props: any) => {
  return (
    <List {...props} perPage={50} exporter={false}>
      <Datagrid>
        <TextField source="id" />
        <FilmName />
        <ArrayField reference="genres" source="genres">
          <SingleFieldList>
            <GenreName />
          </SingleFieldList>
        </ArrayField>
        <NumberField source="duration" />
        <UrlField source="trailerLink" />
        <ImageField source="filmImage" style={{ width: "300px" }} />
        <ArrayField source="ratings" link={false}>
          <SingleFieldList>
            <ChipField source="ratingValue" />
          </SingleFieldList>
        </ArrayField>
        <DateField source="releaseDate" />
        <Description />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export const FilmEdit = (props: any) => {
  return (
    <Edit {...props} undoable={false}>
      <SimpleForm>
        <NameInput lang="en" />
        <NameInput lang="ru" />
        <ReferenceArrayInput source="genres" reference="genres">
          <GenreInput />
        </ReferenceArrayInput>
        <NumberInput
          source="duration"
          validate={[
            required(),
            minValue(validation.film.minDuration),
            maxValue(validation.film.maxDuration),
          ]}
        />
        <TextInput source="trailerLink" />

        <ArrayInput source="ratings">
          <SimpleFormIterator>
            <TextInput source="raterName" />
            <NumberInput
              source="ratingValue"
              validate={[minValue(0), maxValue(10)]}
            />
          </SimpleFormIterator>
        </ArrayInput>
        <ImageInput
          source="filmImage"
          accept="image/*"
          multiple={false}
          validate={[required()]}
        >
          <ImageField source="src" title="title" />
        </ImageInput>

        <DateInput source="releaseDate" validate={[required()]} />
        <DescriptionInput lang="en" />
        <DescriptionInput lang="ru" />
      </SimpleForm>
    </Edit>
  );
};

export const FilmCreate = (props: any) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NameInput lang="en" />
        <NameInput lang="ru" />
        <ReferenceArrayInput source="genres" reference="genres">
          <GenreInput />
        </ReferenceArrayInput>
        <NumberInput
          source="duration"
          validate={[
            required(),
            minValue(validation.film.minDuration),
            maxValue(validation.film.maxDuration),
          ]}
        />
        <TextInput source="trailerLink" />

        <ArrayInput source="ratings">
          <SimpleFormIterator>
            <TextInput source="raterName" />
            <NumberInput
              source="ratingValue"
              validate={[minValue(0), maxValue(10)]}
            />
          </SimpleFormIterator>
        </ArrayInput>
        <ImageInput
          source="filmImage"
          accept="image/*"
          multiple={false}
          validate={[required()]}
        >
          <ImageField source="src" title="title" />
        </ImageInput>

        <DateInput source="releaseDate" validate={[required()]} />
        <DescriptionInput lang="en" />
        <DescriptionInput lang="ru" />
      </SimpleForm>
    </Create>
  );
};
