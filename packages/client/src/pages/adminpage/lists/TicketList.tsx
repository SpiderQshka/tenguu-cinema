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
  ReferenceArrayInput,
  SelectArrayInput
} from "react-admin";

export const TicketList = (props: any) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <ReferenceField
          source="sessionId"
          reference="sessions"
          title="sessions"
        >
          <TextField source="id" />
        </ReferenceField>
        <ReferenceField source="userId" reference="users" title="users">
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
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="sessionId" reference="sessions">
          <SelectInput optionText="id" />
        </ReferenceInput>
        <ReferenceInput source="userId" reference="users">
          <SelectInput optionText="username" />
        </ReferenceInput>
        <NumberInput source="seat.row"></NumberInput>
        <NumberInput source="seat.seatNumber"></NumberInput>
      </SimpleForm>
    </Edit>
  );
};

export const TicketCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="sessionId" reference="sessions">
        <SelectInput optionText="id" />
      </ReferenceInput>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="username" />
      </ReferenceInput>
      <NumberInput source="seat.row"></NumberInput>
      <NumberInput source="seat.seatNumber"></NumberInput>
    </SimpleForm>
  </Create>
);
