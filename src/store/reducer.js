import * as actionTypes from "./actions/actions.js";
// import * as APIUser from '../API/user'
const initialState = {
  products: [
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


    // // get all products
    // case actionTypes.GET_ALL:

    //   // async function getAllProducts() {
    //   //   const res = await APIUser.getUserProducts();
    //   //   console.log(...res)
    //   //   return res;
    //   // }

    //   const arr = [];
    //   // const allProducts = getAllProducts();
    //   let allProducts = [];
    //   let x = APIUser.getUserProducts();
    //   console.log(APIUser.getUserProducts)
    //   allProducts = x;
    //   console.log(allProducts)
    //   for (const key in allProducts) {
    //     arr.push({
    //       name: allProducts[key].name,
    //       price: allProducts[key].price,
    //       id: allProducts[key]._id
    //     })
    //   }
    //   // console.log(...getAllProducts());
    //   // getAllProducts();
    //   return {
    //     ...state,
    //     products: arr

    //   }


    // /////////////  log in 
    case actionTypes.LOGIN:
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
