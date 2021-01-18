import { Component } from "react";
import { Redirect} from 'react-router-dom'

class SignIn extends Component{
    constructor(props){
        super(props)
        this.state={
            newuser:{
                user:'',
                pass:''
            },
            toggle:false
        }
    }
    handleChange=(event)=>{
        const x={}
        x[event.target.name]=event.target.value
        this.setState({newuser:x})
        console.log(this.state.newuser)
    }
    Submit=()=>{
        this.props.login(this.state.newuser.name)
        this.setState({toggle:true})
    }
    render(){
        if(this.state.toggle){
        return(<Redirect to="/user"/>)
    }
        return(
            <div>
             <br/>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="user">Username: </label>
                    <input type="text" name="user" onChange={this.handleChange}/>
                    <label htmlFor="pass">Password: </label>
                    <input type="text" name="pass" onChange={this.handleChange}/>
                    <button onClick={this.Submit}>Log in</button>
                </form>
            </div>
        )
    }

}
export default SignIn