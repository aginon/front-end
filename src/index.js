import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from 'react-router-dom';
import './assets/styles/base.scss';
import 'sweetalert/dist/sweetalert.css';
import Main from './pages/Main';
import configureStore from './config/configureStore';
import { Provider } from 'react-redux';

import* as firebase from 'firebase';

const store = configureStore();
const rootElement = document.getElementById('root');


var config = {
  apiKey: "AIzaSyBmS7TZKP6XZP2Ob0mdFYQbFG9dMa7n1P4",
  authDomain: "hw-lab.firebaseapp.com",
  databaseURL: "https://hw-lab.firebaseio.com",
  projectId: "hw-lab",
  storageBucket: "hw-lab.appspot.com",
  messagingSenderId: "480844427662"
};
firebase.initializeApp(config);


const renderApp = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <Component />
      </HashRouter>
    </Provider>,
    rootElement
  );
};

renderApp(Main);

if (module.hot) {
  module.hot.accept('./pages/Main', () => {
    const NextApp = require('./pages/Main').default
    renderApp(NextApp);
  });
}

registerServiceWorker();

