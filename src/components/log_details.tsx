import * as React from "react";
import Panel from "./panel";
import JSONTree from "react-json-tree";
import theme from "../constants/json_tree_theme";
import interfaces from "../interfaces/interfaces";
import Tip from "./tip";
import { formatBindings } from "../utils/utils";

class LogDetails extends React.Component<any, any> {

    public constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <Panel title={"Request Details"} subtitle={"Explorer"} columnSize={this.props.columnSize} height={this.props.height}>
                {this.props.entry ? this._renderEntry(this.props.entry) : this._renderTip() }
            </Panel>
        );
    }

    private _renderTip() {
        return (
            <Tip>Click on one of the requests on the request log to see its details!</Tip>
        );
    }

    private _formatRequest(request: inversify.interfaces.Request) {
        request.bindings = formatBindings(request.bindings);
        request.childRequests = request.childRequests.map((childRequest: inversify.interfaces.Request) => {
            return this._formatRequest(childRequest);
        });
        return request;
    }

    private _renderEntry(entry: interfaces.SelectableLogEntry) {

        if (entry.details.error) {

            let stack = entry.details.exception.stack.split(" at ")
                             .map((s: string, index: number) => {
                                 if (index === 0) {
                                     return (
                                         <p key={index}>
                                            <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                                            <b>{`${s}`}</b>
                                         </p>
                                     );
                                 } else {
                                     return (
                                         <p>
                                            {`at ${s}`}
                                         </p>
                                     );
                                 }
                             });

            return (
                <div>
                    <div className="customErrorAlert">
                        {stack}
                    </div>
                    <div className="entryDetails">
                        <div style={{ overflowX: "scroll" }}>
                            <JSONTree data={entry.details} theme={theme} isLightTheme={true} />
                        </div>
                    </div>
                </div>
            );

        } else {
            entry.details.rootRequest = this._formatRequest(entry.details.rootRequest);
            return (
                <div className="entryDetails">
                    <div style={{ overflowX: "scroll" }}>
                        <JSONTree data={entry.details} theme={theme} isLightTheme={true} />
                    </div>
                </div>
            );
        }
    }

}

export default LogDetails;
