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
} from "react-admin";

export const TicketList = (props: any) => {
  return (
    <List {...props}>
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
  return (
    <Edit {...props} undoable={false} redirect="list">
      <SimpleForm>
        <ReferenceInput
          source="session"
          validate={[required()]}
          reference="sessions"
        >
          <SelectInput optionText="id" />
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
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="session"
          validate={[required()]}
          reference="sessions"
        >
          <SelectInput optionText="id" />
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
