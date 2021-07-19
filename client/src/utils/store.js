import { createStore } from 'redux';
import reducer from './reducers';

const store = createStore(reducer);
console.log('I am the store current state', store.getState());


export default store;
