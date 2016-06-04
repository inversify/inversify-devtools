import * as React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import loggerActions from "../../actions/logger_actions";
import Playground from "../../components/playground";

function mapStateToPropsReposPage(state: any) {
    return {
        app: state.get("app")
    };
}

function mapDispatchToPropsReposPage(dispatch: Redux.Dispatch) {
    return { actions : bindActionCreators(loggerActions, dispatch) };
}

class PlaygroundPage extends React.Component<any, void> {
    public render() {
        return (
           <Playground height={this.props.app.get("windowHeight")} columnSize={12} />
        );
    }
}

export default connect(mapStateToPropsReposPage, mapDispatchToPropsReposPage)(PlaygroundPage);
