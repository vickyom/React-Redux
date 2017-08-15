import React, { Component } from 'react';
import {connect} from 'react-redux'
import MoviesList from './MoviesList'
import  {loadMovs} from '../../actions/movActions'
var _ = require('lodash');
class MovSys extends Component {

    componentDidMount() {
        //console.log("Store Dispatach Movies");
        this.props.dispatch(loadMovs())
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
    console.log("Synopsis");
    return (
      <div className="App">
        <div className="App-header">
          <h2 className="nshow">Movies Synopsis</h2>
            <MoviesList movies={this.props.movies} />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state, ownProps) { 
    let result =  _.filter(state.movies.list.results, function(o) { 
        let result1 =  _.filter([ 211672,321612],function(a){
            return o.id === a
        });
        return result1.length > 0
    });
    return {
        movies: result,
        isLoading: state.movies.MovisLoading
    };
   
}
export default connect(mapStateToProps)(MovSys); 
