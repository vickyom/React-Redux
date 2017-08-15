/*eslint-disable no-unused-vars*/
import React, {PropTypes} from 'react'
import Header from './common/Header'
/*eslint-enable no-unused-vars*/
class App extends React.Component {  
  render() {
      // console.log(this.props.children);
    return (
      <div className="container-fluid">
        <Header />
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {  
  children: PropTypes.object.isRequired
}

export default App