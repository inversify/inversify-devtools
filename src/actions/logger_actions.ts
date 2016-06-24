import { makeActionCreator } from "../utils/utils";
import ACTION_TYPES from "../constants/action_types";

let addLogEntry = makeActionCreator(ACTION_TYPES.ADD_LOG_ENTRY, "entry");
let selectRequest = makeActionCreator(ACTION_TYPES.SELECT_LOG_ENTRY, "entry");
let filterRequests = makeActionCreator(ACTION_TYPES.FILTER_LOG_ENTRIES, "filterBy");
let clearRequests = makeActionCreator(ACTION_TYPES.CLEAR_LOG);

let loggerActions = {
    addLogEntry,
    selectRequest,
    filterRequests,
    clearRequests
};

export default loggerActions;
