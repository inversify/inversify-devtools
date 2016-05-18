import thunk from "redux-thunk";
import bootstrap from "redux-bootstrap";
import routes from "./config/routes";
import windowReducer from "./reducers/window_reducer";

bootstrap({
    container: "root",
    initialState: {},
    middlewares: [thunk],
    reducers: {
        window: windowReducer
    },
    routes: routes
});
