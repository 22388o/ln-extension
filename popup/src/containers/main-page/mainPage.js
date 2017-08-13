import React, {Component} from 'react';
import {connect} from 'react-redux';
import styles from '../app/App.scss';
import className from 'classnames/bind';
import {withRouter} from 'react-router-dom';
import NavbarHeader from 'Components/navbar-header/navbarHeader';
import { getUserBalance, setPage } from 'Actions';

const cx = className.bind(styles);

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.getUserBalance = this.getUserBalance.bind(this);
        this.goToConnectNodePage = this.goToConnectNodePage.bind(this);
        this.goToTurnOnPage = this.goToTurnOnPage.bind(this);
        this.goToPaymentPage = this.goToPaymentPage.bind(this);
    }

    getUserBalance(e) {
        this.props.dispatch(getUserBalance());
    }

    goToConnectNodePage(e) {
        this.props.dispatch(setPage('connectNode'));
    }

    goToTurnOnPage(e) {
        this.props.dispatch(setPage('turnOn'));
    }

    goToPaymentPage(e) {
        this.props.dispatch(setPage('payment'));
    }

    render() {
        return (
            <div>
                <NavbarHeader/>
                <div className="list-group">
                    <a href="#" className="list-group-item" onClick={this.goToTurnOnPage}>
                        Включить оплату
                    </a>
                    <a href="#" className="list-group-item" onClick={this.goToConnectNodePage}>
                        Подключиться к узлу
                    </a>
                    <a href="#" className="list-group-item" onClick={this.getUserBalance}>
                        Баланс LN кошелька
                    </a>
                    <a href="#" className="list-group-item" onClick={this.goToPaymentPage}>
                        Оплатить
                    </a>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    };
};

export default withRouter(connect(mapStateToProps)(MainPage));
