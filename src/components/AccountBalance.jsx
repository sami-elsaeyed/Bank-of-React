import { Component } from "react";

class AccountBalance extends Component{
    render(){
        return <div>
           <h1> Account Balance:{this.props.balance}</h1>
        </div>
    }

}
export default AccountBalance