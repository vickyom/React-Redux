import React from 'react'
import { Link, IndexLink } from 'react-router'
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';


class Header extends React.Component {
  render() {
  
      return (
        <div className="navbar">
            <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {' | '}
            <Link to="/movies" activeClassName="active">Movies</Link>
            {' | '}
            <Link to="/fav" activeClassName="active">Fav</Link>
            {' | '}
            </nav>
        </div>
      )

  }
}

// Header.propTypes = {
//   actions: PropTypes.object.isRequired
// }

export default Header
