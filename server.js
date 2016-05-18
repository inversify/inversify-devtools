var bootstrap = require("redux-bootstrap");
var routes = require("./config/routes");

var result = bootstrap({
    container: "root",
    createHistory: createMemoryHistory,
    initialState: {},
    middlewares: [thunk],
    reducers: getReducers(),
    render: () => {}, // skip first render, we navigate first
    routes: getRoutes()
});

result.history.push("/users");
result.output = renderToStaticMarkup(result.root);