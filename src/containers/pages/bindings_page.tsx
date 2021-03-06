import * as React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import bindingsActions from "../../actions/bindings_actions";
import KernelExplorer from "../../components/kernel_explorer";
import BindingExplorer from "../../components/binding_explorer";
import BindingPropsExplorer from "../../components/binding_props_explorer";
import interfaces from "../../interfaces/interfaces";

function mapStateToPropsReposPage(state: any) {
    return {
        app: state.get("app")
    };
}

function mapDispatchToPropsReposPage(dispatch: Redux.Dispatch) {
    return { actions : bindActionCreators(bindingsActions, dispatch) };
}

class BindingsPage extends React.Component<any, void> {
    public render() {

        let kernels = this.props.app.get("kernels").toJSON();
        let selectedKernel: interfaces.SelectableKernel = kernels.filter((kernel: interfaces.SelectableKernel) => {
            return kernel.selected === true;
        })[0];

        let dictionary: any[] = [];
        let valuesOfSelectedKey: any = [];
        if (selectedKernel) {
            let _details: any = selectedKernel.details;
            dictionary = (_details._bindingDictionary._dictionary);
            let selectedKeyVal = dictionary.filter((keyVal: any) => {
                return keyVal.selected === true;
            })[0];
            valuesOfSelectedKey = selectedKeyVal ? selectedKeyVal.value : [];
        }

        let selectedKernelGuid = selectedKernel ? selectedKernel.details.guid : "";

        return (
            <div>
                <KernelExplorer height={this.props.app.get("windowHeight")}
                                columnSize={4} kernels={kernels}
                                selectKernel={this.props.actions.selectKernel.bind(this)} />

                <BindingExplorer height={this.props.app.get("windowHeight")}
                                columnSize={4} dictionary={dictionary}
                                kernelGuid={selectedKernelGuid}
                                selectBinding={this.props.actions.selectBinding.bind(this)}/>

                <BindingPropsExplorer height={this.props.app.get("windowHeight")}
                                      columnSize={4} bindings={valuesOfSelectedKey}/>

            </div>
        );

    }
}

export default connect(mapStateToPropsReposPage, mapDispatchToPropsReposPage)(BindingsPage);
