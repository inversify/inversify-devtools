import * as React from "react";
import Menu from "../../components/menu";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import windowActions from "../../actions/window_actions";

const menuWidthPx = 53;

function mapStateToPropsReposPage(state: any) {
    return { 
        window: state.get("window")
    };
}

function mapDispatchToPropsReposPage(dispatch: Redux.Dispatch) {
    return { actions : bindActionCreators(windowActions, dispatch) };
}

class AppLayout extends React.Component<any, any> {
    
    public constructor(props: any) {
        super(props);
    }
    
    public render() {
        let page = this.props.location.pathname.split("/").join("");
        let style = {
            height: this.props.window.get("windowHeight"), 
            width: (this.props.window.get("windowWidth") - menuWidthPx)
        };
        return (
            <div>
                <Menu height={this.props.window.get("windowHeight")} width={menuWidthPx} page={page} />
                <div className="main" style={style}>
                    {this.props.children}
                </div>
            </div>
        );
    }
    
    public componentDidMount() {
        window.addEventListener('resize', (e) => { this._handleResize(); } );
    }
    
    public componentWillUnmount() {
        window.removeEventListener('resize', (e) => { this._handleResize(); });
    }
    
    private _handleResize() {
        this.props.actions.resize(window.innerWidth, window.innerHeight);
    }

}

export default connect(mapStateToPropsReposPage, mapDispatchToPropsReposPage)(AppLayout);
