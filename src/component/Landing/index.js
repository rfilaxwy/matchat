import React, {Component} from 'react';

//Custom
import {Link} from 'react-router-dom';

//External
import {Button} from 'reactstrap';

export default class Landing extends Component {

    render(){
        return(
            <div>
                <h2>Landing</h2>
                <Link to='/login'>
                    <Button color='primary'>Login</Button>
                </Link>
                <Link to='/register'>
                    <Button color='primary'>Register</Button>
                </Link>
            </div>
        )
    }
}