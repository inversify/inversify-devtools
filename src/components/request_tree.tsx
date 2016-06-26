import * as React from "react";
import Panel from "./panel";
import interfaces from "../interfaces/interfaces";
import Tip from "./tip";

class RequestTree extends React.Component<any, any> {

    public constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <Panel title={"Composition Tree"} subtitle={"Explorer"} 
                   columnSize={this.props.columnSize} height={this.props.height}>

                {this._render()}
            </Panel>
        );
    }

    private _render() {
        let entry = this.props.entry;
        if (entry) {
            if (entry.details.error) {
                return this._renderError();
            } else {
                return (
                    <div style={{ overflowX: "scroll", width: "200%" }}>
                        {this._renderTree(entry)}
                    </div>
                );
            }
        } else {
            return this._renderTip();
        }
    }

    private _renderTip() {
        return (
            <Tip>Click on one of the requests on the request log to see its details!</Tip>
        );
    }

    private _renderError() {
        return (
            <div className="customErrorAlert">
                <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                The composition tree cannot be displayed due to an error during the
                resolution process. Please refer to the request details panel to
                find out more information.
            </div>
        );
    }

    private _renderTree(entry: interfaces.SelectableLogEntry) {
        let rootRequest = entry.details.rootRequest;
        return (
            <div className="tree"  style={{ width: "1000px" }}>
                <ul>
                    <li>
                        {this._renderNode(rootRequest)}
                        {this._renderLeaf(rootRequest.childRequests)}
                    </li>
                </ul>
            </div>
        );
    }

    private _renderNode(request: inversify.interfaces.Request) {
        let result: any = request.bindings[0].implementationType;
        return <a href="#">{request.serviceIdentifier} {"\u279e"} {result.name}</a>;
    }

    private _renderLeaf(childRequests: inversify.interfaces.Request[]): JSX.Element {
        if (childRequests.length === 0) {
            return <span></span>;
        }
        return (
            <ul>
                {childRequests.map((childRequest: inversify.interfaces.Request) => {
                    return (
                        <li>
                            {this._renderNode(childRequest)}
                            {this._renderLeaf(childRequest.childRequests)}
                        </li>
                    );
                })}
            </ul>
        );
    }

}

export default RequestTree;
