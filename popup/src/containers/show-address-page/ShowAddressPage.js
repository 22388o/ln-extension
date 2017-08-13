import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Button, Navbar } from 'react-bootstrap';
import styles from '../app/App.scss';
import className from 'classnames/bind';
import {withRouter} from 'react-router-dom';
import NavbarHeader from 'Components/navbar-header/navbarHeader';

const cx = className.bind(styles);

class ShowAddressPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavbarHeader/>
                <div>
                    Address: {this.props.address}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        address: state.app.address
    };
};

export default withRouter(connect(mapStateToProps)(ShowAddressPage));
