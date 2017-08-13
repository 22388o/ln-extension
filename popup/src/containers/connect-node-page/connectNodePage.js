import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import NavbarHeader from 'Components/navbar-header/navbarHeader';


class ConnectNodePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavbarHeader/>
                <div>
                    By default we suggest to use our Cloud Lighting Network node...
                    <table className="table-striped">
                        <tbody>
                            <tr>
                                <td>IP</td>
                                <td>{this.props.host}</td>
                            </tr>
                            <tr>
                                <td>Port</td>
                                <td>{this.props.port}</td>
                            </tr>
                            <tr>
                                <td>Public Key</td>
                                <td>sdfs45dfa5sdf4sd65f4asdf</td>
                            </tr>
                        </tbody>
                    </table>
                    <Button bsStyle="info">
                        Connect
                    </Button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        host: state.app.node.host,
        port: state.app.node.port
    };
};

export default withRouter(connect(mapStateToProps)(ConnectNodePage));
