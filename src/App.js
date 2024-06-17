import React from 'react';

import Navbar from './components/navbar';
import MainHead from './components/main-head';
import MainContent from './components/main-content';
import Footer from './components/footer'
import FooterContent from './components/footer-content';

function App() {
  return (
    <>
      <Navbar/>

      <main className="_container">
        <MainHead/>
        <MainContent/>
      </main>
        <FooterContent />
      <Footer/>
    </>
  );
}

export default App;