import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {ToastContainer} from 'react-toastify';

import App from './components/app/app';
import HistoryRoute from './components/history-route/history-route';
import browserHistory from './browser-history';

import {store} from '../src/store/index';
import { checkAuthAction, fetchAllOffersAction } from './store/api-actions';

import { CITIES } from './const/city-name';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

store.dispatch(checkAuthAction());

store.dispatch(fetchAllOffersAction());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRoute history={browserHistory}>
        <ToastContainer/>
        <App
          cities={CITIES}
        />
      </HistoryRoute>
    </Provider>
  </React.StrictMode>,
);


