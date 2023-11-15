import { createStore } from 'redux';
import rootReducer from './Reducer';

const myStore = createStore(rootReducer);

export default myStore;
