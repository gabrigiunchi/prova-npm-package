const originalLog = console.log;
const originalDebug = console.debug;
const originalError = console.error;
const originalInfo = console.info;
const originalWarn = console.warn;

export const enableLogger = () => {
    console.log = originalLog;
    console.warn = originalWarn;
    console.error = originalError;
    console.info = originalInfo;
    console.debug = originalDebug;
}

export const disabledLogger = () => {
    console.log = () => { };
    console.warn = () => { };
    console.error = () => { };
    console.info = () => { };
    console.debug = () => { };
}