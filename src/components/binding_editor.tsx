import * as React from "react";
import { Link } from "react-router";

class BindingEditor extends React.Component<any, any> {
    
    public constructor(props: any) {
        super(props);
    }
    
    public render() {
        return (
            <div className="panel" style={{ height: this.props.height, width: `$(100/this.props.columnSize).toFixed(2)}%` }} >
                <div className="title">
                    <h6>Editor</h6>
                    <h2>Binding Props</h2>
                </div>
            </div>
        );
    }
}

export default BindingEditor;
