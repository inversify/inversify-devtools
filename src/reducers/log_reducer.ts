import * as Immutable from "immutable";
import ACTION_TYPES from "../constants/action_types";
import interfaces from "../interfaces/interfaces";

const defaultWindowState = Immutable.fromJS({
    entries: [],
    filter: "ALL"
});

function addLogEntry(previousState: any, action: any) {
    let entries = previousState.get("entries");
    if (entries.size === action.logSize) {
        let indexToRemove = 0;
        let numberToRemove = 1;
        entries = entries.splice(indexToRemove, numberToRemove);
    }
    let updatedEntries = entries.push(action.entry);
    return previousState.set("entries", updatedEntries);
}

function selectLogEntry(previousState: any, action: any) {
    let entries = previousState.get("entries");
    let updatedEntries = entries.map((entry: interfaces.SelectableLogEntry) => {
        entry.selected = (entry.details.guid === action.entry.details.guid);
        return entry;
    });
    return previousState.set("entries", updatedEntries);
}

function filterEntries(previousState: any, action: any) {
    return previousState.set("filter", action.filterBy);
}

function clearEntries(previousState: any) {
    let emptyLog = Immutable.fromJS([]);
    return previousState.set("entries", emptyLog);
}

const logReducer: Redux.Reducer = (previousState: any = defaultWindowState, action: any) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_LOG_ENTRY:
            return addLogEntry(previousState, action);
        case ACTION_TYPES.SELECT_LOG_ENTRY:
            return selectLogEntry(previousState, action);
        case ACTION_TYPES.CLEAR_LOG:
            return clearEntries(previousState);
        case ACTION_TYPES.FILTER_LOG_ENTRIES:
            return filterEntries(previousState, action);
        default:
            return previousState;
    }
};

export default logReducer;
