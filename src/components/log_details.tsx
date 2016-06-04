import * as React from "react";
import Panel from "./panel";
import JSONTree from "react-json-tree";
import theme from "../constants/json_tree_theme";

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
            <div className="customAlert" role="alert">
                <i className="fa fa-info-circle" aria-hidden="true"></i>
                Click on one of the requests on the request log to see its details!
            </div>
        );
    }

    private _renderEntry(entry: ISelectableLogEntry) {

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
                        <JSONTree data={entry.details} theme={theme} isLightTheme={true} />
                    </div>
                </div>
            );

        } else {
            return (
                <div className="entryDetails">
                    <JSONTree data={entry.details} theme={theme} isLightTheme={true} />
                </div>
            );
        }
    }

}

export default LogDetails;
