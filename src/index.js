import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './jsx/App.jsx';
import "./css/global/global.css"
import "./css/style/style.css"
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import userSlice from './jsx/features/user.js';
const root = ReactDOM.createRoot(document.getElementById('root'));


const store = configureStore({
  reducer: {
    user : userSlice
  }
})


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

