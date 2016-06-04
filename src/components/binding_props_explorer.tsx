import * as React from "react";
import { Link } from "react-router";
import Panel from "./panel";
import JSONTree from "react-json-tree";
import theme from "../constants/json_tree_theme";

class BindingPropsExplorer extends React.Component<any, any> {

    public constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <Panel title={"Binding Props"} subtitle={"Explorer"} columnSize={this.props.columnSize} height={this.props.height}>
                <div className="entryDetails">
                    <JSONTree data={this.props.bindings} theme={theme} isLightTheme={true} />
                </div>
            </Panel>
        );
    }
}

export default BindingPropsExplorer;
