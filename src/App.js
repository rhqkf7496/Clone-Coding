import React, { useState } from 'react';
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
  /* const [isSignedIn, setIsSignedIn] = useState(false);
  const [isCustomer, setCustomer] = useState(false);
  const [isStore, setStore] = useState(false);

  const goToCustomerPage = () => {
    setCustomer(true);
    setIsSignedIn(false);
    setStore(false);
  };

  const goToSignInPage = () => {
    setIsSignedIn(true);
    setCustomer(false);
    setStore(false);
  };

  const goToFindStorePage = () => {
    setStore(true);
    setIsSignedIn(false);
    setCustomer(false);
  };

  let pageToRender;

  if (isCustomer) {
    pageToRender = <Customer />;
  } else if (isSignedIn) {
    pageToRender = <Signin />;
  } else if (isStore) {
    pageToRender = <FindStore />;
  } else {
    pageToRender = <Content />;
  } */


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

  /*   <div className='app'>

      <Header onCustomer={goToCustomerPage} onSignIn={goToSignInPage} onFindStore={goToFindStorePage} />
      {pageToRender}
      <Footer />

    </div> */
  );
}

export default App;
