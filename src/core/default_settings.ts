import interfaces from "../interfaces/interfaces";

function getDefaultSettings () {
    let defaultSettings: interfaces.UserSettings = {
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
                scope: true,
                serviceIdentifier: true,
                type: true
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
    return defaultSettings;
}

export default getDefaultSettings;
