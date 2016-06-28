import * as React from "react";
import { Link } from "react-router";
import Panel from "./panel";
import Tip from "./tip";

class BindingExplorer extends React.Component<any, any> {

    public constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <Panel title={"Services"} subtitle={"Explorer"} columnSize={this.props.columnSize} height={this.props.height}>
                {this._renderTip()}
                {this._renderBindings(this.props.dictionary)}
            </Panel>
        );
    }

    private _renderTip() {
        if (this.props.dictionary.length === 0) {
            return (
                <Tip>
                    Click on one of the kernels on the kernel panel (left) to see its binding!
                </Tip>
            );
        } else {
            return (
                <Tip>
                    Services with more than one implementation are displayed in yellow.
                    Remember to add some metadata and constraints to avoid ambiguous match exceptions!
                </Tip>
            );
        }
    }

    private _handleClick(keyVal: any) {
        this.props.selectBinding(keyVal, this.props.kernelGuid);
    }

    private _renderClass(length: number) {
        return (length > 1) ? "request requestBox warningBox" : "request requestBox defaultBox";
    }

    private _renderBindings(dictionary: any[]): JSX.Element[] {
        return dictionary.map((keyVal: any, id: number) => {
            return (
                <div key={id} className={this._renderClass(keyVal.value.length)}
                              onClick={(e) => { this._handleClick(keyVal); }}>

                    <div class="title">
                        <h6>IMPLEMENTATIONS: {keyVal.value.length}</h6>
                        <h2>{keyVal.serviceIdentifier.toString()}</h2>
                    </div>

                </div>
            );
        });
    }

}

export default BindingExplorer;
