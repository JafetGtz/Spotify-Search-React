import { createStore } from "redux";

const ADD_VALUE = "ADD_VALUE";
const  initial_state = {
    cart: [],
}


const reducer = ( state = initial_state, action ) => {

  switch (action.type) {
    case ADD_VALUE:
      return { ...state, cart: state.cart.concat( action.value ) };

    default:
      return state;
  }
  
};

export default createStore(reducer, initial_state);
