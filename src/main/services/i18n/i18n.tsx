import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { lang } from './translationsTxt'

i18n
    .use(initReactI18next)
    .init(lang);

