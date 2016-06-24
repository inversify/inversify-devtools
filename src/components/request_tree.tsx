import * as React from "react";
import Panel from "./panel";
import interfaces from "../interfaces/interfaces";

class RequestTree extends React.Component<any, any> {

    public constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <Panel title={"Composition Tree"} subtitle={"Explorer"} columnSize={this.props.columnSize} height={this.props.height}>
                // TODO
            </Panel>
        );
    }

}

export default RequestTree;
