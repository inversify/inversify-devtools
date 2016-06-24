import { makeLoggerMiddleware } from "inversify-logger-middleware";
import SelectableLogEntry from "./selectable_log_entry";
import getDefaultSettings from "./default_settings";
import interfaces from "../interfaces/interfaces";

function getUserSettings(): interfaces.UserSettings {
    return null;
}

function setUserSettings(settings: interfaces.UserSettings, cb: (e: boolean) => void): void {
    return null;
}

function getLogger(
    addLogEntry: (entry: interfaces.SelectableLogEntry) => void,
    initSettings: (settings: interfaces.UserSettings) => void,
    dispatch: Redux.Dispatch
): inversify.interfaces.Middleware {

    let settings: any = window.localStorage.getItem("inversify_settings");

    if (settings === null) {
        settings = getDefaultSettings();
        window.localStorage.setItem("inversify_settings", JSON.stringify(settings));
    } else {
        settings = JSON.parse(settings);
    }

    dispatch(initSettings(settings));

    let reduxRenderer = function(entry: inversifyLoggerMiddleware.interfaces.LogEntry) {
        dispatch(addLogEntry(new SelectableLogEntry(entry)));
    };

    let middleware = makeLoggerMiddleware(settings, reduxRenderer);
    return middleware;
}

export { getUserSettings, setUserSettings, getLogger };
