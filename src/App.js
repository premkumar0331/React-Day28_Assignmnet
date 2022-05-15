import React, { useState } from 'react';
import './style.css';
import Navbar from './Navbar.js';
import Header from './Header.js';
import Section from './Section.js';
import Footer from './Footer.js';

export default function App() {
  const [itemcount, setItemcount] = useState(0);
  const handleIncrement = () => {
    setItemcount(itemcount + 1);
  };
  const handleDecrement = () => {
    setItemcount(itemcount - 1);
  };

  return (
    <div>
      <Navbar cartitem={itemcount} />
      <Header />
      <Section
        handleIncrease={() => handleIncrement()}
        handleDecrease={() => handleDecrement()}
      />
      <Footer />
    </div>
  );
}
