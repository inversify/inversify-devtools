import * as Immutable from "immutable";
import ACTION_TYPES from "../constants/action_types";

const defaultWindowState = Immutable.fromJS({
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth
});

const appReducer: Redux.Reducer = (previousState: any = defaultWindowState, action: any) => {
    switch (action.type) {
        case ACTION_TYPES.RESIZE:
            return previousState.withMutations((ctx: any) => {
                ctx.set("windowWidth", action.width).set("windowHeight", action.height);
            });
        case ACTION_TYPES.APP_INIT_SUCCESS:
        default:
            return previousState;
    }
};

export default appReducer;
