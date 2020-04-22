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
  ImageField,
  minLength,
  maxLength,
  required,
  email,
  ImageInput,
} from "react-admin";
import { validation } from "../config";

export const UserList = (props: any) => {
  return (
    <List {...props} perPage={50}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="status" />
        <EmailField source="email" />
        <TextField source="username" />
        <ImageField source="photo" />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export const UserEdit = (props: any) => {
  return (
    <Edit {...props} undoable={false}>
      <SimpleForm>
        <SelectInput
          source="status"
          choices={[
            { id: "default", name: "Default" },
            { id: "manager", name: "Manager" },
            { id: "admin", name: "Admin" },
          ]}
          validate={[required()]}
        />
        <TextInput source="email" validate={[required(), email()]} />
        <TextInput
          validate={[
            required(),
            minLength(validation.user.minNameSize),
            maxLength(validation.user.maxNameSize),
          ]}
          source="username"
        />
        <ImageInput source="photo" accept="image/*" multiple={false}>
          <ImageField source="src" title="title" />
        </ImageInput>
      </SimpleForm>
    </Edit>
  );
};

export const UserCreate = (props: any) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="status"
          choices={[
            { id: "default", name: "Default" },
            { id: "manager", name: "Manager" },
          ]}
          validate={[required()]}
        />
        <TextInput source="email" validate={[required(), email()]} />
        <TextInput
          validate={[
            required(),
            minLength(validation.user.minNameSize),
            maxLength(validation.user.maxNameSize),
          ]}
          source="username"
        />
        <ImageInput source="photo" accept="image/*" multiple={false}>
          <ImageField source="src" title="title" />
        </ImageInput>
        <PasswordInput source="password" validate={[required()]} />
      </SimpleForm>
    </Create>
  );
};
