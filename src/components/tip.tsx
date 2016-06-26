import * as React from "react";

class Tip extends React.Component<any, any> {

    public constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div className="customAlert" role="alert">
                <i className="fa fa-info-circle" aria-hidden="true"></i>
                {this.props.children}
            </div>
        );
    }

}

export default Tip;
