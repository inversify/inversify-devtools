import * as React from "react";
import { Link } from "react-router";
import Panel from "./panel";
import getDefaultSettings from "../core/default_settings";

class SettingsEditor extends React.Component<any, any> {

    public constructor(props: any) {
        super(props);
        this.state = {
            size: props.settings.size
        };
    }

    public render() {
        return (
            <Panel title={"Settings"} subtitle={"Editor"} columnSize={this.props.columnSize} height={this.props.height}>
                <div className="from">
                    <div className="form-group">
                        <label htmlFor="settings_log_size">Maximun Log Size:</label>
                        <input type="text" className="form-control" style={{ width: "50%" }}
                               id="settings_log_size"
                               placeholder="Maximun number of entries in the request log"
                               value={this.state.size}
                               onChange={(e: any) => { this._handleChange("size", e.target.value); }} />
                    </div>
                    <button type="button" className="btn btn-default"
                            onClick={this._handleSaveClick.bind(this)}>Save Changes</button>
                </div>
            </Panel>
        );
    }

    private _handleChange(property: string, value: any) {
        let update: any = {};
        update[property] = value;
        this.setState(update);
    }

    private _handleSaveClick() {
        let settings = getDefaultSettings();
        settings.size = this.state.size;
        this.props.saveSettingsAsync(settings);
    }

}

export default SettingsEditor;
