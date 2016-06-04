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
                    <button type="button" className="btn btn-default">Save Changes</button>
                </div>
            </Panel>
        );
    }

}

export default SettingsEditor;
