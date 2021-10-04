const initialData = {
  cartcount: 0,
};

function CartReducer(state = initialData, action) {
  switch (action.type) {
    case 'Add_Item':
      return {
        cartcount: ++state.cartcount,
      };

    case 'Remove_Item':
      return {
        cartcount: --state.cartcount,
      };

    default: {
      return state;
    }
  }
}

export default CartReducer;
