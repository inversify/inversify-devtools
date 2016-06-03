import * as Immutable from "immutable";
import ACTION_TYPES from "../constants/action_types";

const defaultWindowState = Immutable.fromJS({
    entries: [],
});

const logReducer: Redux.Reducer = (previousState: any = defaultWindowState, action: any) => {

    let entries: any = null;
    let updatedEntries: any = null;

    switch (action.type) {
        case ACTION_TYPES.ADD_LOG_ENTRY:
            entries = previousState.get("entries");
            updatedEntries = entries.push(action.entry);
            return previousState.set("entries", updatedEntries);
        case ACTION_TYPES.SELECT_LOG_ENTRY:
            entries = previousState.get("entries");
            updatedEntries = entries.map((entry: ISelectableLogEntry) => {
               entry.selected = (entry.guid === action.entry.guid);
               return entry;
            });
            return previousState.set("entries", updatedEntries);
        default:
            return previousState;
    }
};

export default logReducer;
