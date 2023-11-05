import React from 'react';
import { Link } from 'react-router-dom';

function Signin() {
  return (
    <Link to='/signin'>
      <button className='btn btn-secondary'>Signin</button>
    </Link>
  );
}

export default Signin;
