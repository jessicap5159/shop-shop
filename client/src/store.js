import { createStore } from 'redux';
import rootReducer from './reducer';

const store = createStore(rootReducer);
console.log('I am the current state', store.getState());

export default store;