import * as Immutable from "immutable";
import ACTION_TYPES from "../constants/action_types";
import interfaces from "../interfaces/interfaces";
import getDefaultSettings from "../core/default_settings";

const defaultState = Immutable.fromJS({
    settings: getDefaultSettings()
});

function initSettingsSuccess(previousState: any, action: any) {
    return previousState.set("settings", action.settings);
}

function saveSettingsSuccess(previousState: any, action: any) {
    return previousState.set("settings", action.settings);
}

function saveSettingsError(previousState: any, action: any) {
    console.log("TODO!");
}

const settingReducer: Redux.Reducer = (previousState: any = defaultState, action: any) => {
    switch (action.type) {
        case ACTION_TYPES.APP_SETTINGS_SUCCESS:
            return initSettingsSuccess(previousState, action);
        case ACTION_TYPES.SAVE_SETTINGS_SUCCESS:
            return saveSettingsSuccess(previousState, action);
        case ACTION_TYPES.SAVE_SETTINGS_ERROR:
            return saveSettingsError(previousState, action);
        default:
            return previousState;
    }
};

export default settingReducer;
