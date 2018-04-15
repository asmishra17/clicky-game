import React, {Component} from 'react';
import './square.css';
import Image from './images/Ariel.jpg';

class Square extends Component {
    state = {
        clicked: 'no'
    }

    _handleClick = () => {
        console.log('CLICKED');
        this.setState({clicked: 'yes'});
    } // confused about how this works

    render() {
        return (
            <div onClick = {this._handleClick} className = 'square'>
                <img alt = {this.props.name} src = {this.props.image}/>
                {this.state.clicked}
            </div>
        );
    }
}

export default Square;