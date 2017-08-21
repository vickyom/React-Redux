import * as types from '../actions/actionTypes';  
// import initialState from './initialState';

export default function movies(state = {list:[],year:[],FilYear:"",MovisSortData:[],MovisSearchData:[]}, action) {
    console.log("action - - - - - - - - -  - -- -  -- ")
    console.log(action)
      switch(action.type) {
        case types.LOAD_MOVIE_SUCCESS:
            return Object.assign({}, state, { list: action.movs})

        case types.LOAD_MOVIE_YEAR:
            return Object.assign({}, state, { year: action.yearData})
        
        case types.LOAD_MOVIE_FILTER:
            return Object.assign({}, state, { FilYear: action.FilYear})    
        
            case types.MOVIE_IS_LOADING:
            return Object.assign({}, state, { MovisLoading: action.bool})
                   //{ ...state, visibilityFilter: action.filter } 
        case types.MOVIE_HAS_ERRORED:
            return Object.assign({}, state, { MovishasErrored: action.hasErrored})            
        
        case types.LOAD_MOVIE_SORT_ASC:
            return Object.assign({}, state, { MovisSortData: action.sortDats})            
        
        case types.LOAD_MOVIE_SEARCH:
          
         return {  ...state, MovisSearchData: action.searchData }
        
        default: 
            return state;
      }
}


