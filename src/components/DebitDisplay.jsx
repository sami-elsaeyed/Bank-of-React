import React, {Component} from 'react';

import Debit from './Debit';
import AccountBalance from './AccountBalance'

class DebitDisplay extends Component{
    constructor(props){
        super(props)
        this.state={
            debit:[]
        }
    }
    componentDidMount(){
        let link='https://moj-api.herokuapp.com/debits'
        fetch(link)
        .then((response)=>response.json())
        .then((response) =>{
            this.setState({debit:response})
            console.log(this.state.debit)
        })
        .catch((error)=> console.log(error))
    }
    render(){
        let x=0
        return <div>
            <h1>Debits</h1>
         {this.state.debit.map((deb)=>
         <Debit description={deb.description} num={deb.amount} date={deb.date}/>)} 
         {this.state.debit.map((deb)=>x+=deb.amount)}
         <br/>
            {this.props.bal(x)}
     
        </div>
    }

}
export default DebitDisplay