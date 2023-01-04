import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import MessageEN from "./../lang/en-US.json";
import MessageES from "./../lang/es-PE.json";

const LangContext = React.createContext();

const LangProvider = ({ children }) => {
  const [message, setMessage] = useState(MessageES);
  const [locale, setLocale] = useState("es-PE");

  const handleLanguage = (language) => {
    switch (language) {
      case "es-PE":
        setMessage(MessageES);
        setLocale("es-PE");
        break;

      case "en-US":
        setMessage(MessageEN);
        setLocale("en-US");
        break;

      default:
        setMessage(MessageES);
        setLocale("es-PE");
    }
  };

  return (
    <LangContext.Provider value={{ handleLanguage }}>
      <IntlProvider locale={locale} messages={message}>
        {children}
      </IntlProvider>
    </LangContext.Provider>
  );
};

export { LangProvider, LangContext };
