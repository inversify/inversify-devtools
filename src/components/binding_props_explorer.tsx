import * as React from "react";
import { Link } from "react-router";
import Panel from "./panel";
import JSONTree from "react-json-tree";
import theme from "../constants/json_tree_theme";
import Tip from "./tip";
import { formatBindings } from "../utils/utils";

class BindingPropsExplorer extends React.Component<any, any> {

    public constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <Panel title={"Implementations"} subtitle={"Explorer"} columnSize={this.props.columnSize} height={this.props.height}>
                {this._render()}
            </Panel>
        );
    }

    private _render() {
        if (this.props.bindings.length > 0) {
            let bindings = formatBindings(this.props.bindings);
            return (
                <div className="entryDetails">
                    <div style={{ overflowX: "scroll" }}>
                        <JSONTree data={bindings} theme={theme} isLightTheme={true} />
                    </div>
                </div>
            );
        } else {
            return (
                <Tip>
                    Click on one of the services on the services panel (left) to see its binding!
                </Tip>
            );
        }
    }

}

export default BindingPropsExplorer;
