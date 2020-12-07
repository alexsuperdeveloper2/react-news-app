import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { NewsContextProvider } from "./NewsContext";
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
      <NewsContextProvider>
          <App />
      </NewsContextProvider>
     
  , document.getElementById('root')
);


reportWebVitals();
