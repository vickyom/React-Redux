import {createStore, applyMiddleware,compose} from 'redux';  
import rootReducer from '../reducers/rootReducer';  
import thunk from 'redux-thunk';

export default function configureStore() {  
  return createStore(
    rootReducer,
    compose( applyMiddleware(thunk), (typeof(window) !== "undefined" && window.devToolsExtension) ? window.devToolsExtension() : f => f)
  );

}
