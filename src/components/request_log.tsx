import * as React from "react";
import Panel from "./panel";
import interfaces from "../interfaces/interfaces";
import Tip from "./tip";

class RequestLog extends React.Component<any, any> {

    public constructor(props: any) {
        super(props);
    }

    public render() {

        return (
            <Panel title={"Requests Log"} subtitle={"Explorer"} columnSize={this.props.columnSize} height={this.props.height}>
                {this._render()}
            </Panel>
        );

    }

    private _render() {
        if (this.props.log.size > 0) {
            let entries = this.props.log.map((entry: interfaces.SelectableLogEntry, i: number) => {
                return this._renderEntry(entry, i);
            });
            return (
                <div>
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
                </div>
            );
        } else {
            return <Tip>Awaiting requests. Ensure that at least one kernel instance is connected.</Tip>;
        }
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
