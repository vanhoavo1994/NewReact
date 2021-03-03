import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Home from './component/Home';
import Header from './include/Header';
import Slider from './include/Slider';
import Footer from './include/Footer';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Slider />
    <Home />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
