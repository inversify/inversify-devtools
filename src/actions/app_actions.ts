import { getLogger } from "../core/logger";
import { makeActionCreator } from "../utils/utils";
import ACTION_TYPES from "../constants/action_types";
import loggerActions from "./logger_actions";

let resize = makeActionCreator(ACTION_TYPES.RESIZE, "width", "height");
let appInitSuccess = makeActionCreator(ACTION_TYPES.APP_INIT_SUCCESS);

function appInitAsync() {
    return function(dispatch: Redux.Dispatch) {

        let attachLogger = function(kernel: inversify.IKernel) {
            let logger = getLogger(loggerActions.addLogEntry, dispatch);
            kernel.applyMiddleware(logger);
            dispatch(appInitSuccess());
        };

        // TODO EXPOSE TO CHROME DEV TOOLS???
        let win: any = window;
        win.__inversifyDevtools__ = attachLogger;

    };
}

export { appInitAsync, appInitSuccess, resize};
