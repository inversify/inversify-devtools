import interfaces from "../interfaces/interfaces";

class SelectableLogEntry implements interfaces.Selectable,  interfaces.Displayable {

    public details: inversifyLoggerMiddleware.interfaces.LogEntry;
    public selected: boolean;
    public guid: string;
    public visible: boolean;

    public constructor(details: inversifyLoggerMiddleware.interfaces.LogEntry) {
        this.details = details;
        this.selected = false;
        this.visible = false;
    }
}

export default SelectableLogEntry;
