import { makeActionCreator } from "../utils/utils";
import ACTION_TYPES from "../constants/action_types";

let addLogEntry = makeActionCreator(ACTION_TYPES.ADD_LOG_ENTRY, "entry");
let selectRequest = makeActionCreator(ACTION_TYPES.SELECT_LOG_ENTRY, "entry");

let loggerActions = {
    addLogEntry,
    selectRequest
};

export default loggerActions;
