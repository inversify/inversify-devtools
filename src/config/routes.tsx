import * as React from "react";
import { IndexRoute, Route } from "react-router";
import AppLayout from "../containers/layout/layout";
import LoggerPage from "../containers/pages/logger_page";
import BindingsPage from "../containers/pages/bindings_page";
import SettingsPage from "../containers/pages/settings_page";
import PlaygroundPage from "../containers/pages/playground_page";

let routes = (
    <Route path="/" component={AppLayout}>
        <IndexRoute component={LoggerPage} />
        <Route path="/logger" component={LoggerPage} />
        <Route path="/bindings" component={BindingsPage} />
        <Route path="/playground" component={PlaygroundPage} />
        <Route path="/settings" component={SettingsPage} />
    </Route>
);

export default routes;
