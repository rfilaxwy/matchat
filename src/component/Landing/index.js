import React, {Component} from 'react';
import './index.scss';

//Custom
import {Link} from 'react-router-dom';

//External
import {Button} from 'reactstrap';

export default class Landing extends Component {

    render(){
        return(
            <div className='card'>
                <h1>Mat<span>Chat</span></h1>
                <Link to='/login'>
                    <Button className='butt' color='secondary'>Login</Button>
                </Link>
                <Link to='/register'>
                    <Button className='butt' color='secondary'>Register</Button>
                </Link>
            </div>
        )
    }
}