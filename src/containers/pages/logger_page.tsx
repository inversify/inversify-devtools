import * as React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import RequestLog from "../../components/request_log";
import loggerActions from "../../actions/logger_actions";

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
        return (
            <RequestLog height={this.props.app.get("windowHeight")} columnSize={4} log={this.props.log.get("entries")} />
        );
    }
}

export default connect(mapStateToPropsReposPage, mapDispatchToPropsReposPage)(LoggerPage);
