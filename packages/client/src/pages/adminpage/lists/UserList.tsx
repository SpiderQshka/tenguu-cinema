import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  EmailField,
  TextInput,
  SelectInput,
  PasswordInput,
  useLocale,
  ImageField,
  minLength,
  maxLength,
  required,
  email,
} from "react-admin";
import { validation } from "../config";

export const UserList = (props: any) => {
  const locale = useLocale();
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField
          source="status"
          label={locale === "en" ? "Status" : "Статус"}
        />
        <EmailField
          source="email"
          label={locale === "en" ? "Email" : "Адрес эл. почты"}
        />
        <TextField
          source="username"
          label={locale === "en" ? "Username" : "Имя пользователя"}
        />
        <ImageField source="photo" label={locale === "en" ? "Photo" : "Фото"} />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export const UserEdit = (props: any) => {
  const locale = useLocale();
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="status"
          label={locale === "en" ? "Status" : "Статус"}
          choices={[
            { id: "default", name: "Default" },
            { id: "manager", name: "Manager" },
          ]}
          validate={[required()]}
        />
        <TextInput
          source="email"
          label={locale === "en" ? "Email" : "Адрес эл. почты"}
          validate={[required(), email()]}
        />
        <TextInput
          validate={[
            required(),
            minLength(validation.user.minNameSize),
            maxLength(validation.user.maxNameSize),
          ]}
          source="username"
          label={locale === "en" ? "Username" : "Имя пользователя"}
        />
      </SimpleForm>
    </Edit>
  );
};

export const UserCreate = (props: any) => {
  const locale = useLocale();
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="status"
          label={locale === "en" ? "Status" : "Статус"}
          choices={[
            { id: "default", name: "Default" },
            { id: "manager", name: "Manager" },
          ]}
          validate={[required()]}
        />
        <TextInput
          source="email"
          label={locale === "en" ? "Email" : "Адрес эл. почты"}
          validate={[required(), email()]}
        />
        <TextInput
          validate={[
            required(),
            minLength(validation.user.minNameSize),
            maxLength(validation.user.maxNameSize),
          ]}
          source="username"
          label={locale === "en" ? "Username" : "Имя пользователя"}
        />
        <PasswordInput
          validate={[required()]}
          source="password"
          label={locale === "en" ? "Password" : "Пароль"}
        />
      </SimpleForm>
    </Create>
  );
};
