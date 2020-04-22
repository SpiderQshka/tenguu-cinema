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
  NumberInput,
  ReferenceField,
  useLocale,
  useQuery,
  required,
  minLength,
  maxLength,
  minValue,
  maxValue,
} from "react-admin";
import { validation } from "../config";

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
      source={props.lang}
      validate={[
        required(),
        minLength(validation.hall.minNameSize),
        maxLength(validation.hall.maxNameSize),
      ]}
      value={data[props.lang]}
    />
  );
};

export const HallList = (props: any) => {
  const locale = useLocale();
  return (
    <List {...props} perPage={50}>
      <Datagrid>
        <TextField source="id" />
        <ReferenceField source="name" reference="translations">
          <TextField source={locale} />
        </ReferenceField>
        <NumberField source="numberOfRows" />
        <NumberField source="seatsOnRow" />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export const HallEdit = (props: any) => {
  return (
    <Edit {...props} undoable={false}>
      <SimpleForm>
        <NameInput lang="ru" />
        <NameInput lang="en" />
        <NumberInput
          source="numberOfRows"
          validate={[
            required(),
            minValue(validation.hall.minRowsNumber),
            maxValue(validation.hall.maxRowsNumber),
          ]}
        />
        <NumberInput
          source="seatsOnRow"
          validate={[
            required(),
            minValue(validation.hall.minSeatsOnRowNumber),
            maxValue(validation.hall.maxSeatsOnRowNumber),
          ]}
        />
      </SimpleForm>
    </Edit>
  );
};

export const HallCreate = (props: any) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NameInput lang="ru" />
        <NameInput lang="en" />
        <NumberInput
          source="numberOfRows"
          validate={[
            required(),
            minValue(validation.hall.minRowsNumber),
            maxValue(validation.hall.maxRowsNumber),
          ]}
        />
        <NumberInput
          source="seatsOnRow"
          validate={[
            required(),
            minValue(validation.hall.minSeatsOnRowNumber),
            maxValue(validation.hall.maxSeatsOnRowNumber),
          ]}
        />
      </SimpleForm>
    </Create>
  );
};
