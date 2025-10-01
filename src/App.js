
import './index.css';

// src/App.js
import React from 'react';
import Header from './components/Header';
import About from './components/About'
import Skills from './components/Skills'; 

import Portfolio from './components/Portfolio';

import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Skills />
        
        <Portfolio />
        

      </main>
      <Footer />
    </div>
  );
}

export default App;

