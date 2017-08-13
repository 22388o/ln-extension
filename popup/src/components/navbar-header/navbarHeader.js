import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Navbar } from 'react-bootstrap';
import {withRouter} from "react-router-dom";

class NavbarHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Navbar>
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand">Lighting Network Wallet</a>
                    </div>
                </div>
            </Navbar>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    };
};

export default withRouter(connect(mapStateToProps)(NavbarHeader));
