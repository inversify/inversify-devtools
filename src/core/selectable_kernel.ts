import { guid } from "../utils/utils";

class SelectableKernel implements ISelectable, IIdentifiable {

    public details: inversify.IKernel;
    public selected: boolean;
    public guid: string;

    public constructor(details: inversify.IKernel) {
        this.details = details;
        this.selected = false;
        this.guid = guid();
    }
}

export default SelectableKernel;
