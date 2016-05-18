import * as React from "react";
import { Link } from "react-router";

class Panel extends React.Component<any, any> {

    public constructor(props: any) {
        super(props);
    }

    public render() {
        let rowSize = 12;
        let columnSize: number = this.props.columnSize;
        let size = (100 / (rowSize / columnSize)).toFixed(2) + "%";
        return (
            <div className="panel" style={{ height: this.props.height, width: size }} >
                <div className="title">
                    <h6>{this.props.subtitle}</h6>
                    <h2>{this.props.title}</h2>
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default Panel;
