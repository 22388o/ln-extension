import React from 'react';
import {render} from 'react-dom';
import { IndexRoute, MemoryRouter } from 'react-router'
import App from './containers/app/App';
import { Store } from 'react-chrome-redux';
import {Provider} from 'react-redux';

const proxyStore = new Store({
  portName: 'ln'
});

proxyStore.ready().then(() => {
  render(
      <Provider store={proxyStore}>
        <MemoryRouter>
          <App/>
        </MemoryRouter>
      </Provider>
      , document.getElementById('app'));
});
