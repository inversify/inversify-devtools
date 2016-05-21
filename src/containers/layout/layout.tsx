import * as React from "react";
import Menu from "../../components/menu";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as appActions from "../../actions/app_actions";

const menuWidthPx = 53;

function mapStateToPropsReposPage(state: any) {
    return {
        app: state.get("app")
    };
}

function mapDispatchToPropsReposPage(dispatch: Redux.Dispatch) {
    return { actions : bindActionCreators(appActions, dispatch) };
}

class AppLayout extends React.Component<any, any> {

    public constructor(props: any) {
        super(props);
    }

    public render() {
        let page = this.props.location.pathname.split("/").join("");
        let style = {
            height: this.props.app.get("windowHeight"),
            width: (this.props.app.get("windowWidth") - menuWidthPx)
        };
        return (
            <div>
                <Menu height={this.props.app.get("windowHeight")} width={menuWidthPx} page={page} />
                <div className="main" style={style}>
                    {this.props.children}
                </div>
            </div>
        );
    }

    public componentWillMount() {
        this.props.actions.appInitAsync();
    }

    public componentDidMount() {
        window.addEventListener("resize", (e) => { this._handleResize(); } );
    }

    public componentWillUnmount() {
        window.removeEventListener("resize", (e) => { this._handleResize(); });
    }

    private _handleResize() {
        this.props.actions.resize(window.innerWidth, window.innerHeight);
    }

}

export default connect(mapStateToPropsReposPage, mapDispatchToPropsReposPage)(AppLayout);
