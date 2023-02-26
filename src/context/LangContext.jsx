import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import MessageEN from './../lang/en-US.json';
import MessageES from './../lang/es-PE.json';

const LangContext = React.createContext();

const LangProvider = ({ children }) => {
  let defaultLocale;
  let defaultMessage;

  const lang = window.localStorage.getItem('lang');

  if (lang) {
    defaultLocale = lang;

    if (lang === 'es-PE') {
      defaultMessage = MessageES;
    } else if (lang === 'en-US') {
      defaultMessage = MessageEN;
    } else {
      defaultLocale = 'es-PE';
      defaultMessage = MessageES;
    }
  } else {
    defaultLocale = 'es-PE';
    defaultMessage = MessageES;
  }

  const [message, setMessage] = useState(defaultMessage);
  const [locale, setLocale] = useState(defaultLocale);

  const handleLanguage = (language) => {
    switch (language) {
      case 'es-PE':
        setMessage(MessageES);
        setLocale('es-PE');
        window.localStorage.setItem('lang', 'es-PE');
        break;

      case 'en-US':
        setMessage(MessageEN);
        setLocale('en-US');
        window.localStorage.setItem('lang', 'en-US');
        break;

      default:
        setMessage(MessageES);
        setLocale('es-PE');
        window.localStorage.setItem('lang', 'es-PE');
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
