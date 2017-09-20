import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render() {
  
      return (
        <div className="navbar">
            <nav>
            <Link to="/" >Home</Link>
            <Link to="/movies" >Movies</Link>
            <Link to="/fav" >Fav</Link>
            </nav>
        </div>
      )

  }
}

// Header.propTypes = {
//   actions: PropTypes.object.isRequired
// }

export default Header
