import * as React from "react";
import { Link } from "react-router";
import Panel from "./panel";

// TODO
// import { scopeFormatter, bindingTypeFormatter } from "inversify-logger-middleware";

function bindingTypeFormatter(type: number) {
    switch (type) {
        case 1:
            return "Instance";
        case 2:
            return "ConstantValue";
        case 3:
            return "DynamicValue";
        case 4:
            return "Constructor";
        case 5:
            return "Factory";
        case 6:
            return "Provider";
        case 0:
        default:
            return "Invalid";
    }
}

function scopeFormatter(scope: number) {
    switch (scope) {
        case 1:
            return "Singleton";
        case 0:
        default:
            return "Transient";
    }
}

class BindingExplorer extends React.Component<any, any> {

    public constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <Panel title={"Bindings"} subtitle={"Explorer"} columnSize={this.props.columnSize} height={this.props.height}>
                <div className="customAlert" role="alert">
                    <i className="fa fa-info-circle" aria-hidden="true"></i>
                    Services with more than one implementation are displayed in yellow.
                    Remember to add some metadata and constrints to avoid ambiguous match exceptions!
                </div>
                {this._renderBindings(this.props.dictionary)}
            </Panel>
        );
    }

    private _handleClick(keyVal: any) {
        this.props.selectBinding(keyVal, this.props.kernelGuid);
    }

    private _renderClass(length: number) {
        return (length > 1) ? "request requestBox warningBox" : "request requestBox defaultBox";
    }

    private _renderBindings(dictionary: any[]) {
        return dictionary.map((keyVal: any, id: number) => {
            return (
                <div key={id} className={this._renderClass(keyVal.value.length)}
                              onClick={(e) => { this._handleClick(keyVal); }}>

                    <div class="title">
                        <h6>IMPLEMENTATIONS: {keyVal.value.length}</h6>
                        <h2>{keyVal.serviceIdentifier}</h2>
                    </div>

                </div>
            );
        });
    }

}

export default BindingExplorer;
