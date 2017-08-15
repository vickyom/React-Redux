import {combineReducers} from 'redux';  
import  movies from './movReducer';

console.log("combineReducers");

const rootReducer = combineReducers({  
      movies
})

export default rootReducer;