import React from 'react';
import './CSS/reset.css';
import './CSS/style.css';
import Header from './Components/header';
import First from './Components/first';
import Second from './Components/second';
import Three from './Components/three';
import Footer from './Components/footer';
import Subscribe from './Components/subscribe';
import Menu from './Components/Menu'

function App() {
  return (
    <>
    <Header/>
    {/* <First/>
    <Second/>
    <Subscribe />
    <Three/>
    <Footer/> */}
    <Menu />
    </>
  );
}

export default App;
