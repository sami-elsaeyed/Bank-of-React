import React, {Component} from 'react';

import Credit from './Credit';
import AccountBalance from './AccountBalance'

class CreditDisplay extends Component{
    constructor(props){
        super(props)
        this.state={
            credit:[]
        }
    }
    componentDidMount(){
        let link='https://moj-api.herokuapp.com/credits'
        fetch(link)
        .then((response)=>response.json())
        .then((response) =>{
            this.setState({credit:response})
            console.log(this.state.credit)
        })
        .catch((error)=> console.log(error))
    }
    render(){
        let x=0
        return <div>
         {this.state.credit.map((cred)=>
         <Credit description={cred.description} num={cred.amount} date={cred.date}/>)} 
        {this.state.credit.map((cred)=>x+=cred.amount)}
         <br/>
            {this.props.bal(x)}
     
        </div> 
    }

}
export default CreditDisplay