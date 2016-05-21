import makeLoggerMiddleware from "inversify-logger-middleware";

let userSettings: IUserSettings = {
    request: {
        bindings: {
            activated: false,
            cache: false,
            constraint: false,
            dynamicValue: false,
            factory: false,
            implementationType: true,
            onActivation: false,
            provider: false,
            scope: false,
            serviceIdentifier: false,
            type: false
        },
        serviceIdentifier: true,
        target: {
            metadata: true,
            name: false,
            serviceIdentifier: false
        }
    },
    size: 20,
    time: true
};

function getDefaultLoggerSettings(): IUserSettings {
    return userSettings;
}

function getUserSettings(): IUserSettings {
    return null;
}

function setUserSettings(settings: IUserSettings, cb: (e: boolean) => void): void {
    return null;
}

function getLogger(logEntry: (str: string) => void, dispatch: Redux.Dispatch): inversify.IMiddleware {

    let settings: any = window.localStorage.getItem("inversify_settings");

    if (settings === null) {
        settings = getDefaultLoggerSettings();
        window.localStorage.setItem("inversify_settings", JSON.stringify(settings));
    } else {
        settings = JSON.parse(settings);
    }

    let reduxRenderer = function(out: string) {
        dispatch(logEntry(out));
    };

    let middleware = makeLoggerMiddleware(settings, reduxRenderer);
    return middleware;
}

export { getUserSettings, setUserSettings, getLogger };
