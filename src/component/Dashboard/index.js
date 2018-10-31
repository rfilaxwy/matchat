import React, {Component} from 'react';

export default class Landing extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            interests:[],
            profilePicture:''
        }
        
    }
    
    render(){
        return(
            <div>
                <h2>Dashboard</h2>
            </div>
        )
    }
}