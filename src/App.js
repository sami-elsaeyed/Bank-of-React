import './App.css';

import { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './components/Home'
import User from './components/User'
import SignIn from './components/SignIn'
import DebitDisplay from './components/DebitDisplay'
import CreditDisplay from './components/CreditDisplay'

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      balance: "",
      name: "Sami Elsaeyed"
    }
  }
  addBalance=(x)=>{
      //this.setState({balance:this.state.balance+x})
  }
  subBalance=(x)=>{
    //this.setState({balance:this.state.balance-x})
  }
  logIn=(newUser)=>{
    this.setState({name:newUser})
    console.log(newUser)
  }
  render(){
    const HomeC=()=>(
    <Home balance={this.state.balance}/>)
    const UserD=()=>(
      <User name={this.state.name} balance={this.state.balance}/>)
    const Login=()=>(
      <SignIn name={this.state.name} login={this.logIn}/>
    )
    const Debit=()=>(
      <DebitDisplay bal={this.subBalance}/>
    )
    const Credit=()=>(
      <CreditDisplay bal={this.addBalance}/>
    )
    return (
    <div className="App">
        <Router>
            <Route exact path="/" render={HomeC}/>
            <Route exact path="/user" render={UserD}/>
            <Route exact path="/Signin" render={Login}/>
            <Route exact path="/debit" render={Debit}/>
            <Route exact path="/credit" render={Credit}/>
        </Router>
    </div>
  );
}
}

export default App;
