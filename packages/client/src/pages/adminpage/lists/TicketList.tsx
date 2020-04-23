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
  required,
  minValue,
  useQuery,
} from "react-admin";

export const TicketList = (props: any) => {
  return (
    <List {...props} perPage={50}>
      <Datagrid>
        <TextField source="id" />
        <ReferenceField source="session" reference="sessions">
          <TextField source="id" />
        </ReferenceField>
        <ReferenceField source="user" reference="users">
          <TextField source="username" />
        </ReferenceField>
        <NumberField source="seat.row"></NumberField>
        <NumberField source="seat.seatNumber"></NumberField>
        <EditButton />
      </Datagrid>
    </List>
  );
};

export const TicketEdit = (props: any) => {
  const optionRenderer = (choice: any) =>
    `ID: ${choice.film} (${new Date(choice.dateTime).toLocaleDateString()})`;
  return (
    <Edit {...props} undoable={false} redirect="list">
      <SimpleForm>
        <ReferenceInput
          source="session"
          validate={[required()]}
          reference="sessions"
        >
          <SelectInput optionText={optionRenderer} />
        </ReferenceInput>
        <ReferenceInput validate={[required()]} source="user" reference="users">
          <SelectInput optionText="username" />
        </ReferenceInput>
        <NumberInput
          validate={[required(), minValue(1)]}
          source="seat.row"
        ></NumberInput>
        <NumberInput
          validate={[required(), minValue(1)]}
          source="seat.seatNumber"
        ></NumberInput>
      </SimpleForm>
    </Edit>
  );
};

export const TicketCreate = (props: any) => {
  const optionRenderer = (choice: any) =>
    `ID: ${choice.film} (${new Date(choice.dateTime).toLocaleDateString()})`;
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="session"
          validate={[required()]}
          reference="sessions"
        >
          <SelectInput optionText={optionRenderer} />
        </ReferenceInput>
        <ReferenceInput validate={[required()]} source="user" reference="users">
          <SelectInput optionText="username" />
        </ReferenceInput>
        <NumberInput
          validate={[required(), minValue(1)]}
          source="seat.row"
        ></NumberInput>
        <NumberInput
          validate={[required(), minValue(1)]}
          source="seat.seatNumber"
        ></NumberInput>
      </SimpleForm>
    </Create>
  );
};
