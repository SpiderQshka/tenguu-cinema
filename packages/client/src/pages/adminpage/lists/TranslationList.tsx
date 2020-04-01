import React from "react";
import { List, Datagrid, TextField, useLocale } from "react-admin";

export const TranslationList = (props: any) => {
  const locale = useLocale();
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="ru" label={locale === "en" ? "Ru" : "Русск."} />
        <TextField source="en" label={locale === "en" ? "En" : "Англ."} />
      </Datagrid>
    </List>
  );
};
