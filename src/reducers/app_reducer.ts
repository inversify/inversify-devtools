import * as Immutable from "immutable";
import ACTION_TYPES from "../constants/action_types";
import { guid } from "../utils/utils";

const defaulttate = Immutable.fromJS({
    kernels: [],
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth
});

function resize(previousState: any, action: any) {
    return previousState.withMutations((ctx: any) => {
        ctx.set("windowWidth", action.width).set("windowHeight", action.height);
    });
}

function initSuccess(previousState: any, action: any) {
    let kernels = previousState.get("kernels");
    let dictionary = (<any>action.kernel.details)._bindingDictionary._dictionary;
    dictionary.forEach((keyValPair: any) => {
        keyValPair.selected = false;
        keyValPair.guid = guid();
    });
    let updatedKernels = kernels.push(action.kernel);
    return previousState.set("kernels", updatedKernels);
}

function selectKernel(previousState: any, action: any) {
    let kernels = previousState.get("kernels");
    let updatedKernels = kernels.map((kernel: ISelectableKernel) => {
        kernel.selected = (kernel.guid === action.kernel.guid);
        return kernel;
    });
    return previousState.set("kernels", updatedKernels);
}

function selectBinding(previousState: any, action: any) {
    let kernels = previousState.get("kernels");
    let updatedKernels = kernels.map((kernel: ISelectableKernel) => {
        if (kernel.guid === action.kernelGuid) {
            let dictionary = (<any>kernel.details)._bindingDictionary._dictionary;
            dictionary = dictionary.map((keyValPair: any) => {
                keyValPair.selected = (keyValPair.guid === action.keyVal.guid);
                return keyValPair;
            });
        }
        return kernel;
    });
    return previousState.set("kernels", updatedKernels);
}

const appReducer: Redux.Reducer = (previousState: any = defaulttate, action: any) => {

    let kernels: any = null;
    let updatedKernels: any = null;
    let dictionary: any = null;

    switch (action.type) {
        case ACTION_TYPES.RESIZE:
            return resize(previousState, action);
        case ACTION_TYPES.APP_INIT_SUCCESS:
            return initSuccess(previousState, action);
        case ACTION_TYPES.SELECT_KERNEL:
            return selectKernel(previousState, action);
        case ACTION_TYPES.SELECT_BINDING:
            return selectBinding(previousState, action);
        default:
            return previousState;
    }
};

export default appReducer;
