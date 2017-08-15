import Api from '../api/BMSApi'
import * as types from './actionTypes'


//Action for  Movies HasErrored
export function MoviesHasErrored(bool) {
    return {
        type: types.MOVIE_HAS_ERRORED,
        hasErrored: bool
    }
}

//Action for  Movies IsLoading
export function MoviesIsLoading(bool) {
    return { type: types.MOVIE_IS_LOADING, bool}
}
//Action for load Movies Successfully
export function loadMovSuccess(movs) {
    return {type: types.LOAD_MOVIE_SUCCESS, movs}
}

//Action Year
export function loadMovYearSuccess(yearData) {
    return {type: types.LOAD_MOVIE_YEAR, yearData}
}

export function loadMovFilter(FilYear) {
    return {type: types.LOAD_MOVIE_FILTER, FilYear}
}
//Sort Data
export function sortMovies(sortDats) {
    console.log(sortDats)
    return {type: types.LOAD_MOVIE_SORT_ASC, sortDats}
}

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
    const movies = state.movies
    if(movies.FilYear != "") movies.FilYear = ""
    
    let shouldFetch = true
    if ( movies.list.results && movies.list.results.length > 0  || movies.isFetching)
        shouldFetch = false
    return shouldFetch
}

//This function set year which is coming from onchange 
export function fnFilterMov(SelYear) {
    return loadMovFilter(SelYear);
}

//This function is use to sort tha data 
export function fnSortByRet(rat) {
    console.log(rat);
    return (dispatch,getState) => {
        const state = getState()
        state.movies.FilYear = "";
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