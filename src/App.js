import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Signin from './components/Signin';
import Customer from './components/Customer';
import FindStore from './components/FindStore';
import Coffee from './components/Coffee';

function App() {

  return (

    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/signIn" element={<Signin />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/findstore" element={<FindStore />} />
        <Route path="/coffee" element={<Coffee />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
