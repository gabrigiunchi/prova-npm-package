import {Child} from "./components/Child";
import './i18n';
import {disabledLogger} from "./utils/loggerUtils";

if (process.env.NODE_ENV === 'production') {
    disabledLogger();
}

export {Child};
