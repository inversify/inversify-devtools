import * as Immutable from "immutable";
import ACTION_TYPES from "../constants/action_types";

const defaultWindowState = Immutable.fromJS({
    entries: [],
});

const logReducer: Redux.Reducer = (previousState: any = defaultWindowState, action: any) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_LOG_ENTRY:
            let entries = previousState.get("entries");
            let updatedEntries = entries.push(action.entry);
            return previousState.set("entries", updatedEntries);
        default:
            return previousState;
    }
};

export default logReducer;
