import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Signin from './components/Signin';


function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <div className='app'>
      <Header onSignIn={() => setIsSignedIn(true)} />
      {isSignedIn ? <Signin /> : <Content />}
      <Footer></Footer>
    </div>
  );
}

export default App;
