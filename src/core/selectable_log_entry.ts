import { guid } from "../utils/utils";

class SelectableLogEntry implements ISelectable, IIdentifiable {

    public details: inversifyLoggerMiddleware.ILogEntry;
    public selected: boolean;
    public guid: string;

    public constructor(details: inversifyLoggerMiddleware.ILogEntry) {
        this.details = details;
        this.selected = false;
        this.guid = guid();
    }
}

export default SelectableLogEntry;
