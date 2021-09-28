import {createStore} from 'redux';
import rootReducer from './reducers/aggregate-reducers';

export default createStore(rootReducer);
