import React from 'react';
import Button from 'react-bootstrap/Button';

import { useDispatch } from 'react-redux';

function Item() {
  const dispatch = useDispatch();

  function additem() {
    dispatch({ type: 'Add_Item' });
  }

  function removeitem() {
    dispatch({ type: 'Remove_Item' });
  }

  return (
    <div>
      <h1> This is Item Component </h1>
      <Button variant="primary" size="lg" active onClick={additem}>
        Add Items
      </Button>
      <Button variant="secondary" size="lg" active onClick={removeitem}>
        Remove Items
      </Button>
    </div>
  );
}

export default Item;
