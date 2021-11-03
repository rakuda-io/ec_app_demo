import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import createStore from './reducks/store/store';
import * as History from 'history';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';

const history = History.createBrowserHistory();
//store.jsの中でcombineReducerしたstoreの情報をstore定数に代入しexport
export const store = createStore(history);

ReactDOM.render(
  //Providerのstore propsに上記の定数storeを渡す
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
