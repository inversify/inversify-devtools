import * as Immutable from "immutable";
import ACTION_TYPES from "../constants/action_types";
import interfaces from "../interfaces/interfaces";

const defaulttate = Immutable.fromJS({
    kernels: [],
    settings: null,
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth
});

function resize(previousState: any, action: any) {
    return previousState.withMutations((ctx: any) => {
        ctx.set("windowWidth", action.width).set("windowHeight", action.height);
    });
}

function initAppSuccess(previousState: any, action: any) {
    let kernels = previousState.get("kernels");
    let dictionary = (<any>action.kernel.details)._bindingDictionary._dictionary;
    dictionary.forEach((keyValPair: inversify.interfaces.KeyValuePair<any>) => {
        (<any>keyValPair).selected = false;
    });
    let updatedKernels = kernels.push(action.kernel);
    return previousState.set("kernels", updatedKernels);
}

function initSettingsSuccess(previousState: any, action: any) {
    return previousState.set("settings", action.settings);
}

function selectKernel(previousState: any, action: any) {
    let kernels = previousState.get("kernels");
    let updatedKernels = kernels.map((kernel: interfaces.SelectableKernel) => {
        kernel.selected = (kernel.details.guid === action.kernel.details.guid);
        return kernel;
    });
    return previousState.set("kernels", updatedKernels);
}

function selectBinding(previousState: any, action: any) {
    let kernels = previousState.get("kernels");
    let updatedKernels = kernels.map((kernel: interfaces.SelectableKernel) => {
        if (kernel.details.guid === action.kernelGuid) {
            let dictionary = (<any>kernel.details)._bindingDictionary._dictionary;
            dictionary = dictionary.map((keyValPair: inversify.interfaces.KeyValuePair<any>) => {
                (<any>keyValPair).selected = (keyValPair.guid === action.keyVal.guid);
                return keyValPair;
            });
        }
        return kernel;
    });
    return previousState.set("kernels", updatedKernels);
}

function saveSettingsSuccess(previousState: any, action: any) {
    return previousState.set("settings", action.settings);
}

function saveSettingsError(previousState: any, action: any) {
    console.log("TODO!");
}

const appReducer: Redux.Reducer = (previousState: any = defaulttate, action: any) => {
    switch (action.type) {
        case ACTION_TYPES.RESIZE:
            return resize(previousState, action);
        case ACTION_TYPES.APP_INIT_SUCCESS:
            return initAppSuccess(previousState, action);
        case ACTION_TYPES.APP_SETTINGS_SUCCESS:
            return initSettingsSuccess(previousState, action);
        case ACTION_TYPES.SELECT_KERNEL:
            return selectKernel(previousState, action);
        case ACTION_TYPES.SELECT_BINDING:
            return selectBinding(previousState, action);
        case ACTION_TYPES.SAVE_SETTINGS_SUCCESS:
            return saveSettingsSuccess(previousState, action);
        case ACTION_TYPES.SAVE_SETTINGS_ERROR:
            return saveSettingsError(previousState, action);
        default:
            return previousState;
    }
};

export default appReducer;
