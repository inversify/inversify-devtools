import * as React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import loggerActions from "../../actions/logger_actions";
import KernelExplorer from "../../components/kernel_explorer";
import BindingExplorer from "../../components/binding_explorer";
import BindingPropsExplorer from "../../components/binding_props_explorer";

function mapStateToPropsReposPage(state: any) {
    return {
        app: state.get("app")
    };
}

function mapDispatchToPropsReposPage(dispatch: Redux.Dispatch) {
    return { actions : bindActionCreators(loggerActions, dispatch) };
}

class BindingsPage extends React.Component<any, void> {
    public render() {
        return (
            <div>
                <KernelExplorer height={this.props.app.get("windowHeight")} columnSize={4} />
                <BindingExplorer height={this.props.app.get("windowHeight")} columnSize={4} />
                <BindingPropsExplorer height={this.props.app.get("windowHeight")} columnSize={4} />
            </div>
        );
    }
}

export default connect(mapStateToPropsReposPage, mapDispatchToPropsReposPage)(BindingsPage);
