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
  useLocale
} from "react-admin";

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
        <TextField source="photo" label={locale === "en" ? "Photo" : "Фото"} />
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
        <TextInput
          source="status"
          label={locale === "en" ? "Status" : "Статус"}
        />
        <SelectInput
          source="email"
          label={locale === "en" ? "Email" : "Адрес эл. почты"}
          choices={[
            { id: "default", name: "Default" },
            { id: "manager", name: "Manager" }
          ]}
        />
        <TextInput
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
        <TextInput
          source="status"
          label={locale === "en" ? "Status" : "Статус"}
        />
        <SelectInput
          source="email"
          label={locale === "en" ? "Email" : "Адрес эл. почты"}
          choices={[
            { id: "default", name: "Default" },
            { id: "manager", name: "Manager" }
          ]}
        />
        <TextInput
          source="username"
          label={locale === "en" ? "Username" : "Имя пользователя"}
        />
        <PasswordInput
          source="password"
          label={locale === "en" ? "Password" : "Пароль"}
        />
      </SimpleForm>
    </Create>
  );
};
