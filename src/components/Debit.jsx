import React, {Component} from 'react';

class Debit extends Component{
    render(){
        return <div>
            Description:{this.props.description} Amount: {this.props.num} Date: {this.props.date}
            <br/>
        </div>
    }

}
export default Debit