import Api from '../api/BMSApi'
import * as types from './actionTypes'
import  {createCookie,getCookie } from '../components/common/misc'

import { MoviesHasErrored,
         MoviesIsLoading,
         loadMovSuccess,
         loadMovYearSuccess,
         loadMovFilter,
         sortMovies,
         fnSearchText} from './moviesAction'

//Action Cretor that call API 
export function loadMovs() {  
    return function(dispatch ,getState) {
        // This condtion check if data avl in store or not.Then call API
        if(fnCheckState(getState())){
            dispatch(MoviesIsLoading(true))
            // API call
            return Api.getAllMovies().then(movs => {
                // Create the seprate resultset for 
                let release_date1 = [];
                for (let value of movs.results) {
                    value = value.release_date.split("-")[0]
                    release_date1.push(value)
                }
                let uniqueNames = Array.from(new Set(release_date1));

                dispatch(loadMovSuccess(movs))
                dispatch(loadMovYearSuccess(uniqueNames))
                dispatch(MoviesIsLoading(false))
            }).catch(() => dispatch(MoviesHasErrored(true)))
        }
    }
}

// This function check the data in store
function fnCheckState(state){
    console.log("fnCheckState - - - - - --  -- -- ")
    const movies = state.movies
    if(movies.FilYear != "") movies.FilYear = ""
    if(movies.MovisSearchData != "") movies.MovisSearchData = ""
    let shouldFetch = true
    if ( movies.list.results && movies.list.results.length > 0  || movies.isFetching)
        shouldFetch = false
    return shouldFetch
}

//This function set year which is coming from onchange 
export function fnFilterMov(SelYear) {
    return loadMovFilter(SelYear);
}


//This function is use for search
export function fnSearch(SearchData) {
    return (dispatch,getState) => {
        var updatedList =  getState();
      
        if(updatedList.movies.MovisSortData != "") updatedList.movies.MovisSortData = []

        if(updatedList.movies.FilYea != "") updatedList.movies.FilYear="";
            updatedList = updatedList.movies.list.results.filter(function(item){
            return item.original_title.toLowerCase().search(SearchData) !== -1;
            });
        dispatch(fnSearchText(updatedList));
    }
}


//This function is use to sort tha data 
export function fnSortByRet(rat) {
    
    return (dispatch,getState) => {
        const state = getState()
        state.movies.FilYear = ""
       
        //ASC
        if (rat == "RL") {
            let sortData =  state.movies.list.results.slice().sort((first, second) => {    
                  return parseFloat(first.vote_average) - parseFloat(second.vote_average)
            })
            dispatch(sortMovies(sortData))
        }
        //DEC
        if (rat == "RH") {
            let sortData =  state.movies.list.results.slice().sort((first, second) => {
                return parseFloat(second.vote_average) - parseFloat(first.vote_average)
            })
             dispatch(sortMovies(sortData))
        }
     }
}

//This function set the cookie
export function fnSetFavMov(movID) {
    if(!getCookie("FavMov").includes(movID) ){
        let allMovID = ""
        allMovID =  getCookie("FavMov") + '|' + movID
        createCookie("FavMov",allMovID);
    }
}
