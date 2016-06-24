import * as React from "react";
import Panel from "./panel";
import interfaces from "../interfaces/interfaces";

class RequestLog extends React.Component<any, any> {

    public constructor(props: any) {
        super(props);
    }

    public render() {

        let entries = this.props.log.map((entry: interfaces.SelectableLogEntry, i: number) => {
            return this._renderEntry(entry, i);
        });

        return (
            <Panel title={"Requests Log"} subtitle={"Explorer"} columnSize={this.props.columnSize} height={this.props.height}>
                <div className="panelTopMenu">
                    <ul>
                        <li>
                            <a className={this.props.filter === "ALL" ? "active" : ""}
                               onClick={() => { this._onFilterHandler("ALL"); }}>ALL</a>
                        </li>
                        <li>
                            <a className={this.props.filter === "SUCCESS" ? "active" : ""}
                               onClick={() => { this._onFilterHandler("SUCCESS"); }}>SUCCESS</a>
                        </li>
                        <li>
                            <a className={this.props.filter === "ERROR" ? "active" : ""}
                               onClick={() => { this._onFilterHandler("ERROR"); }}>ERROR</a>
                        </li>
                        <li>
                            <a onClick={this._onClearHandler.bind(this)}>CLEAR</a>
                        </li>
                    </ul>
                </div>
                {entries}
            </Panel>
        );

    }

    private _onClearHandler() {
        this.props.clearRequests();
    }

    private _onFilterHandler(filterBy: string) {
        this.props.filterRequests(filterBy);
    }

    private _renderResult(entry: interfaces.SelectableLogEntry) {
        return entry.details.error ? entry.details.exception.message : entry.details.results[0].constructor.name;
    }

    private _renderTime(entry: interfaces.SelectableLogEntry) {
        return entry.details.error ? `ERROR!` : `SUCCESS: ${entry.details.time} ms`;
    }

    private _handleClick(entry: interfaces.SelectableLogEntry) {
        this.props.selectRequest(entry);
    }

    private _renderEntry(entry: interfaces.SelectableLogEntry, id: number) {

        // set box color based on status 
        let classes = `request requestBox ${entry.details.error ? "errorBox" : "successBox"}`;

        // hide based on filter
        let filterByErrorAndEntryIsNotAnError = (this.props.filter === "ERROR" && entry.details.error === false);
        let filterBySuccessAndEntryIsAnError = (this.props.filter === "SUCCESS" && entry.details.error === true);
        if (filterByErrorAndEntryIsNotAnError || filterBySuccessAndEntryIsAnError) {
            classes = "hide";
        }

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
