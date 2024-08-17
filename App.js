import React from 'react';
import './App.css';
import Header from './Header';
import Hello from './Hello';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hello />
      <Footer />
    </div>
  );
}

export default App;
