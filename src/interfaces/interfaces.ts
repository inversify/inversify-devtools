
namespace interfaces {

    export interface UserSettings extends inversifyLoggerMiddleware.interfaces.LoggerSettings {
        size: number;
    }

    export interface Selectable {
        selected: boolean;
    }

    export interface Displayable {
        visible: boolean;
    }

    export interface SelectableKernel extends Selectable {
        details: inversify.interfaces.Kernel;
        selected: boolean;
    }

    export interface SelectableLogEntry extends Selectable, Displayable {
        details: inversifyLoggerMiddleware.interfaces.LogEntry;
        selected: boolean;
        visible: boolean;
    }

}

export default interfaces;
