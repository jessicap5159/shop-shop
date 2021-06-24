import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers';

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useProductReducer({
        products: [],
        cart: [],
        cartOpen: false,
        categories: [],
        currentCategory: ''
    });
    // use this to confirm it works
    console.log(state);
    
    return <Provider value={[state, dispatch]} {...props} />;
};

// to be used by components that need the data <Store Provider> provides
// custom React Hook - when we execute this function from within a component,
// we will receive the [state,dispatch] data our StoreProvider provider manages for us
// this means that any component with access to StoreProvider can use any data
// in our global state container or update it using the dispatch function
const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };