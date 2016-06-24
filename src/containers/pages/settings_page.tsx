import * as React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import loggerActions from "../../actions/logger_actions";
import settingsActions from "../../actions/settings_actions";
import SettingsEditor from "../../components/settings";
import { combineActionsGroups } from "../../utils/utils";

let actions = combineActionsGroups(loggerActions, settingsActions);

function mapStateToPropsReposPage(state: any) {
    return {
        app: state.get("app")
    };
}

function mapDispatchToPropsReposPage(dispatch: Redux.Dispatch) {
    return { actions : bindActionCreators(actions, dispatch) };
}

class SettingsPage extends React.Component<any, void> {
    public render() {
        return (
           <SettingsEditor height={this.props.app.get("windowHeight")}
                           columnSize={12} settings={this.props.app.get("settings")}
                           saveSettingsAsync={this.props.actions.saveSettingsAsync.bind(this)} />
        );
    }
}

export default connect(mapStateToPropsReposPage, mapDispatchToPropsReposPage)(SettingsPage);
