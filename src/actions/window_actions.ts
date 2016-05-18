import { makeActionCreator } from "../utils/utils";
import ACTION_TYPES from "../constants/action_types";

let resize = makeActionCreator(ACTION_TYPES.RESIZE, "width", "height");

let windowActions = {
    resize
};

export default windowActions;
