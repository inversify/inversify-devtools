import thunk from "redux-thunk";
import bootstrap from "redux-bootstrap";
import routes from "./config/routes";
import appReducer from "./reducers/app_reducer";
import logReducer from "./reducers/log_reducer";

bootstrap({
    container: "root",
    initialState: {},
    middlewares: [thunk],
    reducers: {
        app: appReducer,
        log: logReducer
    },
    routes: routes
});
