import { makeActionCreator } from "../utils/utils";
import ACTION_TYPES from "../constants/action_types";
import interfaces from "../interfaces/interfaces";

let saveSettingsSuccess = makeActionCreator(ACTION_TYPES.SAVE_SETTINGS_SUCCESS, "settings");
let saveSettingsError = makeActionCreator(ACTION_TYPES.SAVE_SETTINGS_ERROR, "exception");

let saveSettingsAsync = function (settings: interfaces.UserSettings) {
    try {
        window.localStorage.setItem("inversify_settings", JSON.stringify(settings));
        return saveSettingsSuccess(settings);
    } catch (e) {
        return saveSettingsError(e);
    }
};

let settingsActions = {
    saveSettingsAsync
};

export default settingsActions;
