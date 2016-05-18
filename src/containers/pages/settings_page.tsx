import * as React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import loggerActions from "../../actions/logger_actions";
import SettingsEditor from "../../components/settings";

function mapStateToPropsReposPage(state: any) {
    return { 
        window: state.get("window")
    };
}

function mapDispatchToPropsReposPage(dispatch: Redux.Dispatch) {
    return { actions : bindActionCreators(loggerActions, dispatch) };
}

class SettingsPage extends React.Component<any, void> {
    public render() {
        return (
           <SettingsEditor height={this.props.window.get("windowHeight")} columnSize={12} />
        );
    }
}

export default connect(mapStateToPropsReposPage, mapDispatchToPropsReposPage)(SettingsPage);
