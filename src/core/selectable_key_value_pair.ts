import { guid } from "../utils/utils";

class SelectableKeyVal implements ISelectable, IIdentifiable {

    public details: any; // TODO inversify.IKeyValuePair<any>; ???
    public selected: boolean;
    public guid: string;

    public constructor(details: any) {
        this.details = details;
        this.selected = false;
        this.guid = guid();
    }
}

export default SelectableKeyVal;
