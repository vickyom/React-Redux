import React from 'react'
import {connect} from 'react-redux'
import  {loadMovs,fnSortByRet,fnFilterMov} from '../../actions/movActions'
import MoviesList from './MoviesList'
import MovSelect from './MovSelect'

class MoviesPage extends React.Component {
   
    componentDidMount() {
        //console.log("Store Dispatach Movies");
        this.props.dispatch(loadMovs())
    }
    constructor(props){
        super(props)
        this.handleTextChange = this.handleTextChange.bind(this),
        this.handleChange = this.handleChange.bind(this)
    }
    handleTextChange(event){
        // this.setState({value: event.target.value});
        this.props.dispatch(fnSortByRet(event.target.value))
      
     }
     handleChange(value){
         console.log("Movies page handleChange")
       
        this.props.dispatch(fnFilterMov(value))
    }
    render() {
  
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }
        if (this.props.isLoading) {
            return <p>Loading…</p>
        }
        //Wrong Impe
        if (this.props.movies === undefined) {
            return <p>Loading…</p>
        }
        return (
            <div>
                <div>
                    <select  onChange={event => this.handleTextChange(event)}>
                        <option value="">Rating</option>
                        <option value="RL">Rating Low</option>
                        <option value="RH">Rating High</option>
                    </select>
                    <MovSelect onSelectYear={this.handleChange} movYear = {this.props.year}/> 
                </div>    
                <div>
                    <MoviesList  movies={this.props.movies} />
                </div>
            </div>
        );
    }
}



function mapStateToProps(state) { 
    console.log("mapStateToProps - - -- - - -- -- -- - ")
    console.log(state);
    let MovData = []
   
    // For all movies data with year filter
    if(state.movies.FilYear !=  ""){
        let movs =  _.filter(state.movies.list.results,function(arrMovData){
            let intYear = arrMovData.release_date.split("-")[0]
            return intYear == state.movies.FilYear
        });
        MovData =  movs
    }else if(state.movies.MovisSortData != ""){
          MovData = state.movies.MovisSortData   
    }else{
        // For all movies data without filter
        MovData = state.movies.list.results
    }

    return {
        movies: MovData,
        year:  state.movies.year,
        isLoading: state.movies.MovisLoading
    };
   
}
export default connect(mapStateToProps)(MoviesPage); 