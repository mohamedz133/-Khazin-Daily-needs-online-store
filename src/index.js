import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RecoilRoot } from 'recoil';
import { Provider } from 'react-redux';
import { store } from './reduxStore/productsSlice';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RecoilRoot>
    <Provider store={store}>
      <App />
      </Provider>
  </RecoilRoot>
);

