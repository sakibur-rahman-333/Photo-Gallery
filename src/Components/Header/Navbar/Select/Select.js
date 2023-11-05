import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';

function Select({ direction }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className='d-flex'>
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
        <DropdownToggle caret>Category</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>
            <Link to='/'>All</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to='/animal'>Animal</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to='/food'>Food</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to='/nature'>Nature</Link>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default Select;
