import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Button } from 'react-bootstrap';
import className from 'classnames/bind';
import {withRouter} from "react-router-dom";
import { payContent } from 'Actions';
import styles from '../app/App.scss';

const cx = className.bind(styles);

class PaymentPage extends Component {
    constructor(props) {
        super(props);
        this.payContent = this.payContent.bind(this);
    }

    payContent(e) {
        this.props.dispatch(payContent());
    }

    render() {
        return (
            <div>
                Это страница оплаты контента
                <Button onClick={this.payContent} bsStyle="primary">
                    Оплатить
                </Button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        paymentPage: state.app.page
    };
};

export default withRouter(connect(mapStateToProps)(PaymentPage));
