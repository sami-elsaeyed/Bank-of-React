import React, {Component} from 'react';

import {Link} from 'react-router-dom';

class User extends Component {
  render() {
    return <div>
            <Link to="/">Home</Link>
            <br/>
            <Link to="/Signin">Log in</Link>
          <h3>Username: {this.props.name}</h3>
          <p>Account Balance: {this.props.balance}</p>
        </div>
    
  }
}

export default User;