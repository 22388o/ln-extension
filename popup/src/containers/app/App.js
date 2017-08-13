import React, {Component} from 'react';
import {connect} from 'react-redux';
import className from 'classnames/bind';
import { Switch, Route } from 'react-router-dom';
import PaymentPage from 'Containers/payment-page/paymentPage';
import MainPage from 'Containers/main-page/mainPage';
import ConnectNodePage from 'Containers/connect-node-page/connectNodePage';
import TurnOnPage from 'Containers/turn-on-page/TurnOnPage';
import ShowAddressPage from 'Containers/show-address-page/ShowAddressPage';
import {withRouter} from 'react-router-dom';
import styles from './App.scss';

const cx = className.bind(styles);

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    //Does not use history.push in other components. Use dispatch(SET_PAGE) to change page
    if(nextProps.page != this.props.page) {
      this.props.history.push('/' + nextProps.page + 'Page');
    }
  };

  render() {
    return (
      <div className={cx('app')}>
        <Switch>
          <Route path="/paymentPage" component={PaymentPage} />
          <Route path="/connectNodePage" component={ConnectNodePage} />
          <Route path="/turnOnPage" component={TurnOnPage} />
          <Route path="/showAddressPage" component={ShowAddressPage} />
          <Route path="/" component={MainPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    page: state.app.page
  };
};

export default withRouter(connect(mapStateToProps)(App));
