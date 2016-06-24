import * as React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import RequestLog from "../../components/request_log";
import RequestTree from "../../components/request_tree";
import LogDetails from "../../components/log_details";
import loggerActions from "../../actions/logger_actions";
import interfaces from "../../interfaces/interfaces";

function mapStateToPropsReposPage(state: any) {
    return {
        app: state.get("app"),
        log: state.get("log")
    };
}

function mapDispatchToPropsReposPage(dispatch: Redux.Dispatch) {
    return { actions : bindActionCreators(loggerActions, dispatch) };
}

class LoggerPage extends React.Component<any, void> {
    public render() {

        let entries: any = this.props.log.get("entries");

        let selectedEntry = entries.filter((entry: interfaces.SelectableLogEntry) => {
            return entry.selected === true;
        }).toJSON()[0];

        return (
            <div>

                <RequestLog height={this.props.app.get("windowHeight")}
                            columnSize={4} log={entries} filter={this.props.log.get("filter")}
                            selectRequest={this.props.actions.selectRequest.bind(this)}
                            filterRequests={this.props.actions.filterRequests.bind(this)}
                            clearRequests={this.props.actions.clearRequests.bind(this)} />

                <LogDetails height={this.props.app.get("windowHeight")} columnSize={4} entry={selectedEntry} />
                <RequestTree height={this.props.app.get("windowHeight")} columnSize={4} entry={selectedEntry} />

            </div>
        );
    }
}

export default connect(mapStateToPropsReposPage, mapDispatchToPropsReposPage)(LoggerPage);
