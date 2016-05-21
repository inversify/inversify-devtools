import * as React from "react";
import { Link } from "react-router";
import Panel from "./panel";
import { parseLogEntry } from "../utils/utils";

class RequestLog extends React.Component<any, any> {

    public constructor(props: any) {
        super(props);
    }

    public render() {

        let entries = this.props.log.map((eStr: string, i: number) => {
            let eObj = parseLogEntry(eStr);
            return this._renderEntry(eObj, i);
        });

        return (
            <Panel title={"Requests"} subtitle={"Explorer"} columnSize={this.props.columnSize} height={this.props.height}>
                {entries}
            </Panel>
        );

    }

    private _renderEntry(entry: any, id: number) {
        return (
            <div key={id} className="request">
                <div class="title">
                    <h6>{entry.time}</h6>
                    <h2>{entry.serviceIdentifier} => {entry.implementationType}</h2>
                </div>
            </div>
        );
    }

}

export default RequestLog;
