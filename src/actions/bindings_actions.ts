import { makeActionCreator } from "../utils/utils";
import ACTION_TYPES from "../constants/action_types";

let selectKernel = makeActionCreator(ACTION_TYPES.SELECT_KERNEL, "kernel");
let selectBinding = makeActionCreator(ACTION_TYPES.SELECT_BINDING, "keyVal", "kernelGuid");

let bindingsActions = {
    selectKernel,
    selectBinding
};

export default bindingsActions;
