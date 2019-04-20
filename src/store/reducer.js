import * as actionTypes from "./actions/actions.js";

const initialState = {
  users: [
    {
      id: '',
      name: '',
      email: '',
      token: ''
    }

  ],
  products: [
    {
      id: 1,
      name: "a",
      price: 555,

    },
    {
      id: 2,
      name: "a ",
      price: 500,

    },
    {
      id: 3,
      name: "a",
      price: 405,

    },

    {
      id: 4,
      name: "a",
      price: 235,

    },
    {
      id: 5,
      name: "a",
      price: 123,

    },
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.REMOVE:
      const products = [...state.products];
      const index = products.findIndex(p => p.id === action.payload);
      products.splice(index, 1);
      return {
        ...state,
        products
      };

    case actionTypes.SHOW_DETAILS:
      const ps = [...state.products];
      const product = ps.find(p => p.id === action.payload);
      return {
        ...state,
        selectedProduct: product
      };

    case actionTypes.SAVE_REGESTIRATION:
      const newUser = {
        id: action.userData.id,
        name: action.userData.name,
        email: action.userData.email
      }
      return {
        ...state,
        users: state.users.concat(newUser)
      }




    default:
      return state;
  }
};
export default reducer;
