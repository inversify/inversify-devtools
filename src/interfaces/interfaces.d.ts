
interface IUserSettings extends inversifyLoggerMiddleware.ILoggerSettings {
    size: number;
}

interface ISelectable {
    selected: boolean;
}

interface IIdentifiable {
    guid: string;
}

interface ISelectableKernel extends ISelectable, IIdentifiable {
    details: inversify.IKernel;
    selected: boolean;
    guid: string;
}

interface ISelectableLogEntry extends ISelectable, IIdentifiable {
    details: inversifyLoggerMiddleware.ILogEntry;
    selected: boolean;
    guid: string;
}

declare module "react-json-tree" {
    let JSONTree: any;
    export default JSONTree;
}
