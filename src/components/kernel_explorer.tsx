import * as React from "react";
import { Link } from "react-router";

const dir = {
    close: "&#9657",
    open: "&#9663;"
};

class KernelExplorer extends React.Component<any, any> {
    
    public constructor(props: any) {
        super(props);
    }
    
    public render() {
        return (
            <div className="panel" style={{ height: this.props.height, width: `$(100/this.props.columnSize).toFixed(2)}%`  }} >
                <div className="title">
                    <h6>Explorer</h6>
                    <h2>Kernels</h2>
                </div>
            </div>
        );
    }
}

export default KernelExplorer;
