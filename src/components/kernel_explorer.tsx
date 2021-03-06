import * as React from "react";
import { Link } from "react-router";
import Panel from "./panel";
import interfaces from "../interfaces/interfaces";
import Tip from "./tip";

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
            <Panel title={"Kernels"} subtitle={"Explorer"} columnSize={this.props.columnSize} height={this.props.height}>
                {this._render()}
            </Panel>
        );
    }

    private _render() {
        if (this.props.kernels.length > 0) {
            let kernels = this._renderKernels(this.props.kernels);
            return <div>{kernels}</div>;
        } else {
            return <Tip>
                No Kernels found! Use global
                <span className="label label-default" style={{backgroundColor: "transparent"}}>__inversifyDevtools__</span>
                to connect a kernel.
            </Tip>;
        }
    }

    private _handleClick(kernel: interfaces.SelectableKernel) {
        this.props.selectKernel(kernel);
    }

    private _renderKernels(kernels: interfaces.SelectableKernel[]) {
        return kernels.map((kernel: interfaces.SelectableKernel, id: number) => {
            return (
                <div key={id} className="request requestBox defaultBox" onClick={(e) => { this._handleClick(kernel); }}>
                    <div class="title">
                        <h6>GUID: {kernel.details.guid}</h6>
                        <h2>Kernel</h2>
                    </div>
                </div>
            );
        });
    }

}

export default KernelExplorer;
