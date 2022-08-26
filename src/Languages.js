import React from 'react';

const ENGLISH = 'english';
const SPANISH = 'spanish';

const LANGUAGES = {
  ENGLISH: ENGLISH,
  SPANISH: SPANISH
};

const LanguageContext = React.createContext({language: LANGUAGES.ENGLISH, changeLanguage: () => {} });
const withCurrentLanguage = (Component) => (props) => <LanguageContext.Consumer>
    { ({language, changeLanguage}) => <Component currentLanguage={language} changeLanguage={changeLanguage} {...props} /> }
</LanguageContext.Consumer>;

export { LANGUAGES, LanguageContext, withCurrentLanguage };