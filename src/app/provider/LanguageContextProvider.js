import React, {Children, useState, useEffect, useContext} from 'react';
import en from '../../assets/i18n/en.json';
import de from '../../assets/i18n/de.json';
import * as RNLocalize from 'react-native-localize';
import App from '../../../App';
// import {Toast} from 'react-native-toast-message/lib/src/Toast';
import toastConfig from '../components/toast/ToastConfig';
const LanguageContext = React.createContext();
const languageObj = {
  en: en,
  de: de,
};
export const LanguageContextProvider = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  useEffect(() => {
    const currentLanguage = RNLocalize.findBestAvailableLanguage(
      Object.keys(languageObj),
    );

    setSelectedLanguage(currentLanguage?.languageTag || 'en');
  }, []);

  const value = {
    ...languageObj[selectedLanguage],
  };
  return (
    <LanguageContext.Provider value={value}>
      <App />
      {/* <Toast topOffset={15} bottomOffset={70} config={toastConfig} /> */}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => useContext(LanguageContext);
