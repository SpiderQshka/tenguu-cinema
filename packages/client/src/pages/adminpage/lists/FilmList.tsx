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
} from "react-admin";
import { Chip } from "@material-ui/core";
import RichTextInput from "ra-input-rich-text";

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
  console.log(data, props);

  return (
    <TextInput
      {...props}
      label={label}
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
      return result[0] ? { name: obj[locale], id: obj.id } : null;
    })
    .filter((el: any) => el);

  const label = locale === "en" ? "Genres" : "Жанры";

  return (
    <SelectArrayInput
      {...props}
      label={label}
      choices={choices}
      optionText="name"
    />
  );
};

const DescriptionInput = (props: any) => {
  const locale = useLocale() as "ru" | "en";

  const { data, error } = useQuery({
    type: "getOne",
    resource: "translations",
    payload: { id: props.record.description },
  });

  if (!data || error) return null;

  const label =
    props.lang === "ru"
      ? locale === "en"
        ? "Description, ru"
        : "Описание, русск."
      : locale === "en"
      ? "Description, en"
      : "Описание, англ.";

  return (
    <RichTextInput
      {...props}
      label={label}
      toolbar={[]}
      placeholder={data[locale] ? data[locale] : "I18n error."}
      defaultValue={data[locale] ? data[locale] : "I18n error."}
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
  return <Chip label={data[locale] ? data[locale] : "I18n error."} />;
};

const GenreName = (props: any) => {
  const locale = useLocale();

  const { data, error } = useQuery({
    type: "getOne",
    resource: "translations",
    payload: { id: props.record },
  });

  if (!data || error) return null;

  return <Chip label={data[locale] ? data[locale] : "I18n error."} />;
};

const Description = ({ record }: any) => {
  const locale = useLocale();
  const { data, error } = useQuery({
    type: "getOne",
    resource: "translations",
    payload: { id: record.description },
  });

  if (!data || error) return null;

  return <p>{data[locale] ? data[locale] : "I18n error."}</p>;
};

export const FilmList = (props: any) => {
  const locale = useLocale();
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <FilmName label={locale === "en" ? "Name" : "Название"} />
        <ArrayField
          reference="genres"
          source="genres"
          label={locale === "en" ? "Genres" : "Жанры"}
        >
          <SingleFieldList>
            <GenreName />
          </SingleFieldList>
        </ArrayField>
        <NumberField
          source="duration"
          label={locale === "en" ? "Duration" : "Длительность"}
        />
        <UrlField
          source="trailerLink"
          label={locale === "en" ? "Trailer link" : "Ссылка на трейлер"}
        />
        <ImageField
          source="filmImage"
          label={locale === "en" ? "Image" : "Картинка"}
        />
        <ArrayField
          source="ratings"
          link={false}
          label={locale === "en" ? "Ratings" : "Оценки"}
        >
          <SingleFieldList>
            <ChipField source="ratingValue" />
          </SingleFieldList>
        </ArrayField>
        <DateField
          source="releaseDate"
          label={locale === "en" ? "Release date" : "Дата выхода"}
        />
        <Description label={locale === "en" ? "Description" : "Описание"} />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export const FilmEdit = (props: any) => {
  const locale = useLocale();

  return (
    <Edit {...props}>
      <SimpleForm>
        <NameInput lang="en" />
        <NameInput lang="ru" />
        <ReferenceArrayInput
          source="genres"
          reference="genres"
          label={locale === "en" ? "Genres" : "Жанры"}
        >
          <GenreInput />
        </ReferenceArrayInput>
        <NumberInput
          source="duration"
          label={
            locale === "en" ? "Duration, minutes" : "Длительность, в минутах"
          }
        />
        <TextInput
          source="trailerLink"
          label={locale === "en" ? "Trailer link" : "Ссылка на трейлер"}
        />

        <ArrayInput
          source="ratings"
          label={locale === "en" ? "Ratings" : "Оценки"}
        >
          <SimpleFormIterator>
            <TextInput
              source="raterName"
              label={locale === "en" ? "Rater" : "Автор"}
            />
            <NumberInput
              source="ratingValue"
              label={locale === "en" ? "Rating" : "Рейтинг"}
            />
          </SimpleFormIterator>
        </ArrayInput>
        <ImageInput
          source="filmImage"
          accept="image/*"
          multiple={false}
          label={locale === "en" ? "Image" : "Картинка"}
        >
          <ImageField source="src" title="title" />
        </ImageInput>

        <DateInput
          source="releaseDate"
          label={locale === "en" ? "Release date" : "Дата выхода"}
        />
        <DescriptionInput lang="en" />
        <DescriptionInput lang="ru" />
      </SimpleForm>
    </Edit>
  );
};

export const FilmCreate = (props: any) => {
  const locale = useLocale();
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput
          label={locale === "en" ? "Name, en" : "Название, англ."}
          source="nameEn"
        />
        <TextInput
          label={locale === "en" ? "Name, ru" : "Название, русск."}
          source="nameRu"
        />
        <ReferenceArrayInput
          source="genres"
          reference="genres"
          label={locale === "en" ? "Genres" : "Жанры"}
        >
          <GenreInput />
        </ReferenceArrayInput>
        <NumberInput
          source="duration"
          label={
            locale === "en" ? "Duration, minutes" : "Длительность, в минутах"
          }
        />
        <TextInput
          source="trailerLink"
          label={locale === "en" ? "Trailer link" : "Ссылка на трейлер"}
        />

        <ArrayInput
          source="ratings"
          label={locale === "en" ? "Ratings" : "Оценки"}
        >
          <SimpleFormIterator>
            <TextInput
              source="raterName"
              label={locale === "en" ? "Rater" : "Автор"}
            />
            <NumberInput
              source="ratingValue"
              label={locale === "en" ? "Rating" : "Рейтинг"}
            />
          </SimpleFormIterator>
        </ArrayInput>
        <ImageInput
          source="filmImage"
          accept="image/*"
          multiple={false}
          label={locale === "en" ? "Image" : "Картинка"}
        >
          <ImageField source="src" title="title" />
        </ImageInput>

        <DateInput
          source="releaseDate"
          label={locale === "en" ? "Release date" : "Дата выхода"}
        />
        <RichTextInput
          source="descRu"
          toolbar={[]}
          label={locale === "en" ? "Description, ru" : "Описание, русск."}
        />
        <RichTextInput
          source="descEn"
          toolbar={[]}
          label={locale === "en" ? "Description, en" : "Описание, англ."}
        />
      </SimpleForm>
    </Create>
  );
};
