import * as React from "react";
import Panel from "./panel";

class RequestLog extends React.Component<any, any> {

    public constructor(props: any) {
        super(props);
    }

    public render() {

        let entries = this.props.log.map((entry: ISelectableLogEntry, i: number) => {
            return this._renderEntry(entry, i);
        });

        return (
            <Panel title={"Requests Log"} subtitle={"Explorer"} columnSize={this.props.columnSize} height={this.props.height}>
                {entries}
            </Panel>
        );

    }

    private _renderResult(entry: ISelectableLogEntry) {
        return entry.details.error ? entry.details.exception.message : entry.details.results[0].constructor.name;
    }

    private _renderTime(entry: ISelectableLogEntry) {
        return entry.details.error ? `ERROR!` : `SUCCESS: ${entry.details.time} ms`;
    }

    private _handleClick(entry: ISelectableLogEntry) {
        this.props.selectRequest(entry);
    }

    private _renderEntry(entry: ISelectableLogEntry, id: number) {
        let classes = `request requestBox ${entry.details.error ? "errorBox" : "successBox"}`;
        return (
            <div key={id} className={classes} onClick={(e) => { this._handleClick(entry); }}>
                <div class="title">
                    <h6>{this._renderTime(entry)}</h6>
                    <h2>{entry.details.serviceIdentifier} {"\u279e"} {this._renderResult(entry)}</h2>
                </div>
            </div>
        );
    }

}

export default RequestLog;
