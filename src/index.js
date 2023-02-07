import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  About,
  Contact,
  News,
  Latest,
  Previous,
  Userfaq,
  TermsandC,
  Privacy,
  Logo,
} from "./components";
// import App from "./App"


ReactDOM.render(
  <Router>
    <Logo />
    <Navigation />
    {/* <App /> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/latestwork" element={<Latest />} />
      <Route path="/previouswork" element={<Previous />} />
      <Route path="/news" element={<News />} />
      <Route path="/faqs" element={<Userfaq />} />
      <Route path="/privacypolicy" element={<Privacy />} />
      <Route path="/termsandconditions" element={<TermsandC />} />
    </Routes>
    <Footer />
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
