import * as Immutable from "immutable";
import ACTION_TYPES from "../constants/action_types";

const defaulttate = Immutable.fromJS({
    kernels: [],
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth
});

const appReducer: Redux.Reducer = (previousState: any = defaulttate, action: any) => {

    let kernels: any = null;
    let updatedKernels: any = null;

    switch (action.type) {

        case ACTION_TYPES.RESIZE:
            return previousState.withMutations((ctx: any) => {
                ctx.set("windowWidth", action.width).set("windowHeight", action.height);
            });

        case ACTION_TYPES.APP_INIT_SUCCESS:
            kernels = previousState.get("kernels");
            updatedKernels = kernels.push(action.kernel);
            return previousState.set("kernels", updatedKernels);

        case ACTION_TYPES.SELECT_KERNEL:
            kernels = previousState.get("kernels");
            updatedKernels = kernels.map((kernel: ISelectableKernel) => {
               kernel.selected = (kernel.guid === action.kernel.guid);
               return kernel;
            });
            return previousState.set("kernels", updatedKernels);

        default:
            return previousState;

    }
};

export default appReducer;
