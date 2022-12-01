import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {ToastContainer} from 'react-toastify';
import App from './components/app/app';
import { cities } from './const/city-name';
import {store} from '../src/store/index';

import 'react-toastify/dist/ReactToastify.css';
import { checkAuthAction, fetchAllOffersAction } from './store/api-actions';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

store.dispatch(checkAuthAction());

store.dispatch(fetchAllOffersAction());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer/>
      <App
        cities={cities}
      />
    </Provider>
  </React.StrictMode>,
);


