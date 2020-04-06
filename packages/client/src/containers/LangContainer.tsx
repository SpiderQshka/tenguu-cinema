import React from "react";
import { IState } from "interfaces/IState";
import { connect, ConnectedProps } from "react-redux";
import { IntlProvider } from "react-intl";
import ru from "translations/ru.json";
import en from "translations/en.json";

const messages = {
  ru,
  en
};

const mapStateToProps = (state: IState) => state;

const connector = connect(mapStateToProps);

export type IntlProviderProps = ConnectedProps<typeof connector>;

const IntlProviderContainer = (props: IntlProviderProps) => {
  const lang = props.lang.currentLang;
  const dbMessages = props.lang.translations;
  return (
    <IntlProvider
      locale={lang}
      messages={{ ...messages[lang], ...dbMessages[lang] }}
      {...props}
    />
  );
};

export default connector(IntlProviderContainer);
