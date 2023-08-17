import React from 'react';
// Ne fonctionne pas sous react 17
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';

// import './styles/index.css';
// import App from './components/App';

import Home from './pages/Home';

import reportWebVitals from './reportWebVitals';

// Ne fonctionne pas sous react version 17
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
