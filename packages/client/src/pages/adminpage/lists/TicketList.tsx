import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  NumberInput,
  ReferenceInput,
  SelectInput,
  ReferenceField,
  NumberField,
  useLocale
} from "react-admin";

export const TicketList = (props: any) => {
  const locale = useLocale();
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <ReferenceField
          source="session"
          reference="sessions"
          label={locale === "en" ? "Session" : "Сеанс"}
        >
          <TextField source="id" />
        </ReferenceField>
        <ReferenceField
          source="user"
          reference="users"
          label={locale === "en" ? "User" : "Пользователь"}
        >
          <TextField source="username" />
        </ReferenceField>
        <NumberField
          source="seat.row"
          label={locale === "en" ? "Row" : "Ряд"}
        ></NumberField>
        <NumberField
          source="seat.seatNumber"
          label={locale === "en" ? "Seat number" : "Место"}
        ></NumberField>
        <EditButton />
      </Datagrid>
    </List>
  );
};

export const TicketEdit = (props: any) => {
  const locale = useLocale();
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="session"
          reference="sessions"
          label={locale === "en" ? "Session" : "Сеанс"}
        >
          <SelectInput optionText="id" />
        </ReferenceInput>
        <ReferenceInput
          source="user"
          reference="users"
          label={locale === "en" ? "User" : "Пользователь"}
        >
          <SelectInput optionText="username" />
        </ReferenceInput>
        <NumberInput
          source="seat.row"
          label={locale === "en" ? "Row" : "Ряд"}
        ></NumberInput>
        <NumberInput
          source="seat.seatNumber"
          label={locale === "en" ? "Seat number" : "Место"}
        ></NumberInput>
      </SimpleForm>
    </Edit>
  );
};

export const TicketCreate = (props: any) => {
  const locale = useLocale();
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="session"
          reference="sessions"
          label={locale === "en" ? "Session" : "Сеанс"}
        >
          <SelectInput optionText="id" />
        </ReferenceInput>
        <ReferenceInput
          source="user"
          reference="users"
          label={locale === "en" ? "User" : "Пользователь"}
        >
          <SelectInput optionText="username" />
        </ReferenceInput>
        <NumberInput
          source="seat.row"
          label={locale === "en" ? "Row" : "Ряд"}
        ></NumberInput>
        <NumberInput
          source="seat.seatNumber"
          label={locale === "en" ? "Seat number" : "Место"}
        ></NumberInput>
      </SimpleForm>
    </Create>
  );
};
