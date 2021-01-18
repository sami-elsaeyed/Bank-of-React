import React, {Component} from 'react';

class Credit extends Component{
    render(){
        return <div>
            Description:{this.props.description} Amount: {this.props.num} Date: {this.props.date}
            <br/>
        </div>
    }

}
export default Credit