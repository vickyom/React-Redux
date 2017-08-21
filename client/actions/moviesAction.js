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

export function fnSearchText(searchData) {
    // console.log(sortDats)
    return {type: types.LOAD_MOVIE_SEARCH, searchData}
}