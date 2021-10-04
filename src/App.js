import React from 'react';
import './style.css';
import Navbar from './Navbar';
import Item from './Item';
import CartReducer from './CartReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

function App() {
  const store = createStore(CartReducer);

  return (
    <div>
      <Provider store={store}>
        <Navbar />
        <Item />
      </Provider>
    </div>
  );
}

export default App;
