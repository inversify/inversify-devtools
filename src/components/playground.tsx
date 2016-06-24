import * as React from "react";
import { Link } from "react-router";
import Panel from "./panel";

class Playground extends React.Component<any, any> {

    public constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <Panel title={"Playground"} subtitle={"Editor"}
                   columnSize={this.props.columnSize} height={this.props.height}>

                <div className="customAlert" role="alert">
                    <i className="fa fa-info-circle" aria-hidden="true"></i>
                    The playground is a sandbox. You can write some code here to try InversifyJS
                    without having to set up the a real development environment.
                </div>

            </Panel>
        );
    }

}

export default Playground;
