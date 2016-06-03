import * as React from "react";
import Panel from "./panel";
import JSONTree from "react-json-tree";

class LogDetails extends React.Component<any, any> {

    public constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <Panel title={"Request Details"} subtitle={"Explorer"} columnSize={this.props.columnSize} height={this.props.height}>
                {this.props.entry ? this._renderEntry(this.props.entry) : this._renderTip() }
            </Panel>
        );
    }
    
    private _renderTip() {
        return (
            <div className="customAlert" role="alert">
                <i className="fa fa-info-circle" aria-hidden="true"></i>
                Click on one of the requests on the request log to see its details!
            </div>
        );
    }

    private _renderEntry(entry: ISelectableLogEntry) {
        if(entry.details.error) {

            let stack = entry.details.exception.stack.split(" at ")
                             .map((s: string, index: number) => {
                                 if (index === 0) {
                                     return (
                                         <p>
                                            <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                                            {`at ${s}`}
                                         </p>
                                     );
                                 } else {
                                     return (
                                         <p>
                                            {`at ${s}`}
                                         </p>
                                     );
                                 }
                             });
            
            return (
                <div className="customErrorAlert">
                    {stack}
                </div>
            );

        } else {
            const theme = {
                scheme: 'monokai',
                author: 'wimer hazenberg (http://www.monokai.nl)',
                base00: '#272822',
                base01: '#383830',
                base02: '#49483e',
                base03: '#75715e',
                base04: '#a59f85',
                base05: '#f8f8f2',
                base06: '#f5f4f1',
                base07: '#f9f8f5',
                base08: '#f92672',
                base09: '#fd971f',
                base0A: '#f4bf75',
                base0B: '#a6e22e',
                base0C: '#a1efe4',
                base0D: '#66d9ef',
                base0E: '#ae81ff',
                base0F: '#cc6633'
            };
            return (
                <div className="entryDetails">
                    <JSONTree data={entry.details} theme={theme} isLightTheme={true} />
                </div>
            );
        }
    }

}

export default LogDetails;
