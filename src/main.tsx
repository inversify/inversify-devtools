import thunk from "redux-thunk";
import { bootstrap } from "redux-bootstrap";
import routes from "./config/routes";
import appReducer from "./reducers/app_reducer";
import logReducer from "./reducers/log_reducer";
import settingReducer from "./reducers/setting_reducer";

function render(container: string) {
    bootstrap({
        container: container,
        initialState: {},
        middlewares: [thunk],
        reducers: {
            app: appReducer,
            log: logReducer,
            settings: settingReducer
        },
        routes: routes
    });
}

export default render;
