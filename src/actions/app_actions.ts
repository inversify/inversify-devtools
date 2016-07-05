import { getLogger } from "../core/logger";
import { makeActionCreator } from "../utils/utils";
import ACTION_TYPES from "../constants/action_types";
import loggerActions from "./logger_actions";
import SelectableKernel from "../core/selectable_kernel";

let resize = makeActionCreator(ACTION_TYPES.RESIZE, "width", "height");
let appInitSuccess = makeActionCreator(ACTION_TYPES.APP_INIT_SUCCESS, "__inversifyDevtools__");
let kernelConnectSucess = makeActionCreator(ACTION_TYPES.KERNEL_CONNECT_SUCCESS, "kernel");
let initSettings = makeActionCreator(ACTION_TYPES.APP_SETTINGS_SUCCESS, "settings");

function appInitAsync() {
    return function(dispatch: Redux.Dispatch) {

        let __inversifyDevtools__ = function(kernel: inversify.interfaces.Kernel) {
            let logger = getLogger(loggerActions.addLogEntry, initSettings, dispatch);
            kernel.applyMiddleware(logger);
            let selectableKernel = new SelectableKernel(kernel);
            dispatch(kernelConnectSucess(selectableKernel));
        };

        dispatch(appInitSuccess(__inversifyDevtools__));

    };
}

export { appInitAsync, appInitSuccess, resize};
