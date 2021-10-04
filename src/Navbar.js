import React from 'react';
import { useSelector } from 'react-redux';

function Navbar() {
  const cartdata = useSelector((store) => store);

  return (
    <div>
      <h1>
        This is Navbar Component :Number of Items on Cart
        <span color blue>
          {cartdata.cartcount}
        </span>
      </h1>
    </div>
  );
}

export default Navbar;
