import { Component } from "react";
import AccountBalance from './AccountBalance'
import {Link} from 'react-router-dom'
class Home extends Component{
    render(){ 
        return <div>
             <Link to="/user">User Profile</Link>
             <br/>
             <Link to="/Signin">Log in</Link>
             <br/>
             <Link to="/debit">Debit</Link>
             <br/>
             <Link to="/credit">Credit</Link>
            <AccountBalance balance={this.props.balance}/>
        </div>

    
    }
}
export default Home