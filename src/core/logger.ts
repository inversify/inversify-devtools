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

function getLogger() {
    // 
}

export { getUserSettings, setUserSettings, getLogger };
