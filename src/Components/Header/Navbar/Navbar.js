import './Navbar.css';
import React from 'react';
import Logo from './Logo/Logo';
import Select from './Select/Select';
import Signin from '../Signin/Signin';

function Navbar() {
  return (
    <div className='Navbar'>
      <Logo />
      <Select />
      <Signin />
    </div>
  );
}

export default Navbar;
