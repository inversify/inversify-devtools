import interfaces from "../interfaces/interfaces";
import { guid } from "../utils/utils";

class SelectableLogEntry implements interfaces.Selectable,  interfaces.Displayable {

    public details: inversifyLoggerMiddleware.interfaces.LogEntry;
    public selected: boolean;
    public guid: string;
    public visible: boolean;

    public constructor(details: inversifyLoggerMiddleware.interfaces.LogEntry) {
        this.details = details;
        this.selected = false;
        this.visible = false;
        this.guid = guid(); // TODO https://github.com/inversify/InversifyJS/issues/272
    }
}

export default SelectableLogEntry;
