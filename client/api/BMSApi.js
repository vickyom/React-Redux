
class BMSApi {  
   static getAllMovies() {
      //console.log("getAll Movies");
     return fetch('https://api.themoviedb.org/3/movie/popular?api_key=KEY').then(response => {
        return response.json()
    }).catch(error => {
        return error
    })
  }
}
export default BMSApi


// import axios from 'axios';

// export function fetchUsers() {
//   const request = axios.get('http://jsonplaceholder.typicode.com/users');

//   return (dispatch) => {
//     request.then(({data}) => {
//       dispatch({ type: 'FETCH_PROFILES', payload: data })
//     });
//   };
// }
