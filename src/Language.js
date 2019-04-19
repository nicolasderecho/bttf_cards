import React from 'react';
import './Language.scss';
import classNames from 'classnames';
import { withCurrentLanguage } from './Languages'

const LanguageFlag = ({ image, language, currentLanguage, changeLanguage }) => {
    const classes = classNames({selected: language === currentLanguage}, 'language-flag');
    return <img src={image} className={classes} alt={currentLanguage} onClick={() => changeLanguage(language)}/>
};

const Language = withCurrentLanguage(LanguageFlag);

export default Language;