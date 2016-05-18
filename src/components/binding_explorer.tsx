import * as React from "react";
import { Link } from "react-router";
import Panel from "./panel";

class BindingExplorer extends React.Component<any, any> {

    public constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <Panel title={"Bindings"} subtitle={"Explorer"} columnSize={this.props.columnSize} height={this.props.height}>
                // TODO
            </Panel>
        );
    }
}

export default BindingExplorer;
