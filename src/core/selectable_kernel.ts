import interfaces from "../interfaces/interfaces";

class SelectableKernel implements interfaces.Selectable {

    public details: inversify.interfaces.Kernel;
    public selected: boolean;

    public constructor(details: inversify.interfaces.Kernel) {
        this.details = details;
        this.selected = false;
    }
}

export default SelectableKernel;
