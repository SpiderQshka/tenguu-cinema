import React from "react";
import { List, Datagrid, TextField } from "react-admin";

export const TranslationList = (props: any) => {
  return (
    <List {...props} perPage={50} exporter={false}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="ru" />
        <TextField source="en" />
      </Datagrid>
    </List>
  );
};
