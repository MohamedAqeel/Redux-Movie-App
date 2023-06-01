import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import { Provider } from 'react-redux';
import { store } from './features/store';
import 'font-awesome/css/font-awesome.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

