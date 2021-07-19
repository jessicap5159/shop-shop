import {
  UPDATE_PRODUCTS,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  ADD_TO_CART,
  ADD_MULTIPLE_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  CLEAR_CART,
  TOGGLE_CART
} from "../utils/actions";

const defaultState = {
  products: [],
  cart: [],
  cartOpen: false,
  categories: [],
  currentCategory: "",
};

const reducer = (state=defaultState, action) => {
  switch (action.type) {
      // if action type value is the value of `UPDATE_PRODUCTS`, return a new state object with an updated products array
      case UPDATE_PRODUCTS:
          return {
              ...state,
              products: [...action.products],
          };
      // if action type values is `UPDATE_CATEGORIES
      case UPDATE_CATEGORIES:
          return {
              ...state,
              categories: [...action.categories]
          };

      // if action type is `UPDATE_CURRENT_CATEGORIES
      case UPDATE_CURRENT_CATEGORY:
          return {
              ...state,
              currentCategory: action.currentCategory
          };

      // if action type is "ADD_TO_CART"
      case ADD_TO_CART:
          return {
              ...state,
              cartOpen: true,
              cart: [...state.cart, action.product]
          };

      // if action type is "ADD_MULTIPLE_TO_CART"
      case ADD_MULTIPLE_TO_CART:
          return {
              ...state,
              cart: [...state.cart, ...action.products],

          };

      // if action type is " REMOVE_FROM_CART"
      case REMOVE_FROM_CART:
          let newState = state.cart.filter(product => {
              return product._id !== action._id;
          });

          return {
              ...state,
              cartOpen: newState.length > 0,
              cart: newState
          }

      // if the action type is "UPDATE_CART_QUANTITY"
      case UPDATE_CART_QUANTITY:
          return {
              ...state,
              cartOpen: true,
              cart: state.cart.map(product => {
                  if (action._id === product._id) {
                      product.purchaseQuantity = action.purchaseQuantity;
                  }
                  return product;
              })
          };

      // if the action type is "CEAR_CART"
      case CLEAR_CART:
          return {
              ...state,
              cartOpen: false,
              cart: []
          };

      // if the action type is "TOGGLE_CART"
      case TOGGLE_CART: 
         return {
             ...state,
             cartOpen: !state.cartOpen
         };

      // if it's none of these actions, do not update state at all and keep things the same
      default:
          return state;
  }
};

export default reducer;
