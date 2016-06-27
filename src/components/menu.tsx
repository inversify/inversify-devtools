import * as React from "react";
import { Link } from "react-router";

class Menu extends React.Component<any, any> {

    public constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div className="menu" style={{height: this.props.height, width: this.props.width }}>
                <ul>
                    <li className={ (this.props.page === "" || this.props.page === "logger") ? "active" : "" }>
                        <Link to="/logger">
                            <i className="fa fa-terminal" aria-hidden="true" />
                        </Link>
                    </li>
                    <li className={ (this.props.page === "bindings") ? "active" : "" }>
                        <Link to="/bindings">
                            <i className="fa fa-map-o" aria-hidden="true" />
                        </Link>
                    </li>
                    <li className={ (this.props.page === "playground") ? "hide active" : "hide" }> /* TEMP HIDE CLASS */
                        <Link to="/playground">
                            <i className="fa fa-play-circle-o" aria-hidden="true" />
                        </Link>
                    </li>
                    <li className={ (this.props.page === "settings") ? "active" : "" }>
                        <Link to="/settings">
                            <i className="fa fa-sliders" aria-hidden="true" />
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Menu;
