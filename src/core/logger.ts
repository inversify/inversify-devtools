import { makeLoggerMiddleware } from "inversify-logger-middleware";
import SelectableLogEntry from "./selectable_log_entry";
import getDefaultSettings from "./default_settings";
import interfaces from "../interfaces/interfaces";

function getSettings() {

    let settings: any = window.localStorage.getItem("inversify_settings");

    if (settings === null) {
        settings = getDefaultSettings();
        window.localStorage.setItem("inversify_settings", JSON.stringify(settings));
    } else {
        settings = JSON.parse(settings);
    }

    return settings;

}

function getLogger(
    addLogEntry: (entry: interfaces.SelectableLogEntry, logSize: number) => void,
    initSettings: (settings: interfaces.UserSettings) => void,
    dispatch: Redux.Dispatch
): inversify.interfaces.Middleware {

    let settings = getSettings();

    dispatch(initSettings(settings));

    let reduxRenderer = function(entry: inversifyLoggerMiddleware.interfaces.LogEntry) {
        dispatch(addLogEntry(new SelectableLogEntry(entry), getSettings().size));
    };

    let middleware = makeLoggerMiddleware(settings, reduxRenderer);
    return middleware;
}

export { getLogger };
