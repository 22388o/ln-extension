import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Button, Navbar } from 'react-bootstrap';
import className from 'classnames/bind';
import {withRouter} from 'react-router-dom';
import NavbarHeader from 'Components/navbar-header/navbarHeader';
import { createAddress } from 'Actions';
import styles from '../app/App.scss';

const cx = className.bind(styles);

class TurnOnPage extends Component {
    constructor(props) {
        super(props);
        this.turnOn = this.turnOn.bind(this);
    }

    turnOn(e) {
        this.props.dispatch({
            type: 'CREATE_ADDRESS'
        });
    }

    render() {
        return (
            <div>
                <NavbarHeader/>
                <div>
                    In order to allow your browser wallet to spent access private...
                    <Button bsStyle="info" onClick={this.turnOn}>
                        Turn On
                    </Button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        page: state.app.page
    };
};

export default withRouter(connect(mapStateToProps)(TurnOnPage));
