import React, {PropTypes} from 'react'
import HomePage  from './home/HomePage';
import MoviesPage from './movies/MoviesPage';
import MovSys from './movies/movsys';
import AboutPage from './about/AboutPage';
import Header from './common/Header'
// import routes from '../routes';  
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
class App extends React.Component {  
  render() {
    console.log("inside app")
   console.log(this.props.children);
    return (
      <div className="container-fluid">
          <div>
               <Router>
                  <div>
                    <Header />
                      <Route exact path='/' component={HomePage}/>
                      <Route path='/movies' component={MoviesPage}/>
                      <Route path='/fav' component={MovSys}/>
                  </div>
                </Router>
                
            </div>
       
      </div>
    )
  }
}

export default App