import * as React from "react";
import { Link } from "react-router";
import Panel from "./panel";

class RequestLog extends React.Component<any, any> {

    public constructor(props: any) {
        super(props);
    }

    public render() {

        let entries = this.props.log.map((entry: inversifyLoggerMiddleware.ILogEntry, i: number) => {
            return this._renderEntry(entry, i);
        });

        return (
            <Panel title={"Requests"} subtitle={"Explorer"} columnSize={this.props.columnSize} height={this.props.height}>
                {entries}
            </Panel>
        );

    }

    private _renderResult(entry: inversifyLoggerMiddleware.ILogEntry) {
        return entry.error ? entry.exception.message : entry.results[0].constructor.name;
    }

    private _renderTime(entry: inversifyLoggerMiddleware.ILogEntry) {
        return entry.error ? `ERROR!` : `SUCCESS: ${entry.time} ms`;
    }

    private _handleClick(entry: inversifyLoggerMiddleware.ILogEntry) {
        this.props.selectRequest(entry);
    }

    private _renderEntry(entry: inversifyLoggerMiddleware.ILogEntry, id: number) {
        let classes = `request requestBox ${entry.error ? "errorBox" : "successBox"}`;
        return (
            <div key={id} className={classes} onClick={(e) => { this._handleClick(entry); }}>
                <div class="title">
                    <h6>{this._renderTime(entry)}</h6>
                    <h2>{entry.serviceIdentifier} {"\u279e"} {this._renderResult(entry)}</h2>
                </div>
            </div>
        );
    }

}

export default RequestLog;
