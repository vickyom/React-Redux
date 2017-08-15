import React, {PropTypes} from 'react';
import { Link } from 'react-router';

const MoviesList = ({movies}) => {  
    return (
        <div className="list-group">
            { 
            movies.map(mov => 
            <div key ={mov.id} className="movCars">
                <div>
                    <img className="ImgClass" src={`http://image.tmdb.org/t/p/w185/${mov.poster_path}`} alt=''/> 
                        <div className="movDat">
                            <span>{mov.release_date}</span><br/>
                            <span>{mov.vote_average}</span>
                        </div>
                        <div className="movTit">
                            <span>{mov.original_language}</span>
                            <h4>{mov.title}</h4>
                        </div>
                    </div>
                </div>
            )}
        </div>
      );
};

MoviesList.propTypes = {  
  movies: PropTypes.array.isRequired
};

export default MoviesList; 