import * as Immutable from "immutable";
import ACTION_TYPES from "../constants/action_types";

const defaultWindowState = Immutable.fromJS({
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth
});

const windowReducer: Redux.Reducer = (previousState: any = defaultWindowState, action: any) => {
    switch (action.type) {
        case ACTION_TYPES.RESIZE:
            return previousState.withMutations((ctx: any) => {
                ctx.set("windowWidth", action.width).set("windowHeight", action.height);
            });
        default:
            return previousState;
    }
};

export default windowReducer;
