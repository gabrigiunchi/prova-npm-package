import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import en from './locales/en.json';
import de from './locales/de.json';

console.log('setting up translations');

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: {en, de},
        lng: 'de',
        interpolation: {
            escapeValue: false
        }
    });
