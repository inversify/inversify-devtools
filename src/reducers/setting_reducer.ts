import * as Immutable from "immutable";
import ACTION_TYPES from "../constants/action_types";
import interfaces from "../interfaces/interfaces";

const defaultState = Immutable.fromJS({
    settings: null
});

function saveSettingsSuccess(previousState: any, action: any) {
    return previousState.set("settings", action.settings);
}

function saveSettingsError(previousState: any, action: any) {
    console.log("TODO!");
}

const settingReducer: Redux.Reducer = (previousState: any = defaultState, action: any) => {
    switch (action.type) {
        case ACTION_TYPES.SAVE_SETTINGS_SUCCESS:
            return saveSettingsSuccess(previousState, action);
        case ACTION_TYPES.SAVE_SETTINGS_ERROR:
            return saveSettingsError(previousState, action);
        default:
            return previousState;
    }
};

export default settingReducer;
