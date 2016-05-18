import * as React from "react";
import { Link } from "react-router";
import Panel from "./panel";

class SettingsEditor extends React.Component<any, any> {

    public constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <Panel title={"Settings"} subtitle={"Editor"} columnSize={this.props.columnSize} height={this.props.height}>
                <div className="from">
                    <div className="form-group">
                        <label htmlFor="settings_log_size">Maximun Log Size:</label>
                        <input type="text" className="form-control" style={{ width: "50%" }}
                               id="settings_log_size" placeholder="Maximun number of entries in the request log" />
                    </div>
                    <div className="form-group">
                        <label>Logged Elements:</label>
                        {this._generateForm()}
                    </div>
                    <button type="button" className="btn btn-default">Save Changes</button>
                </div>
            </Panel>
        );
    }

    private _renderCheckBoxField(name: string) {
        return(
            <div className="checkbox">
                <label>
                    <input type="checkbox" /> {name}
                </label>
            </div>
        );
    }

    private _generateForm() {
        let settings = [
            "request.time", "request.serviceIdentifier", "bindings.activated", "bindings.cache",
            "bindings.constraint", "bindings.dynamicValue", "bindings.factory",
            "bindings.implementationType", "bindings.onActivation", "bindings.provider",
            "bindings.scope", "bindings.serviceIdentifier", "bindings.type", "target.metadata",
            "target.name", "target.serviceIdentifier"
        ];
        return settings.map((s) => { return this._renderCheckBoxField(s); });
    }

}

export default SettingsEditor;
