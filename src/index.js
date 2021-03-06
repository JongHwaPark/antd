import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

(function setViewportScale() {
  const statusBarSize = 24;
  const width = window.screen.width;
  const height = window.screen.height - statusBarSize;
  const scale = Math.min(width / 1500, height / 1000);
  const viewport = document.querySelector("meta[name=viewport]");
  viewport.setAttribute('content', `initial-scale=${scale}, user-scalable=no`);
  console.log('asdasdasdd');
})();


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
