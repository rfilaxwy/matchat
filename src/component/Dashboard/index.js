import React, {Component} from 'react';

import {connect} from 'react-redux';

class Landing extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            interests:[],
            profilePicture:''
        }
        
    }
    componentDidMount(){

    }
    editInterest (val) {
        switch (val){
            case 1:
                document.getElementById('ione').contentEditable = true;
                break;
            case 2:
                document.getElementById('itwo').contentEditable = true;
                break;
            case 3:
                document.getElementById('ithree').contentEditable = true;
                break;
            default:
                break;
        }   
    }

    save (val) {
        switch (val){
            case 1:
                document.getElementById('ione').contentEditable = false;
                const interestOne = document.getElementById('ione').innerHTML;
                this.setState({interestOne:interestOne});
                break;
            case 2:
                document.getElementById('itwo').contentEditable = true;
                break;
            case 3:
                document.getElementById('ithree').contentEditable = true;
                break;
            default:
                break;
        }   
    }

    render(){
        const {username, city, country}= this.props;
        return(
            <div>
                <h2>Welcome {username} from {city}, {country}</h2>

                <div className="interestCard">
                    <div id='ione'>Interest 1</div><span onClick={()=>{this.editInterest(1)}}>Edit</span> <span onClick={()=>{this.save(1)}}>Save</span>
                    <div id='itwo'>Interest 2</div><span onClick={()=>{console.log(2)}}>Edit</span> <span onClick={()=>{this.save(2)}}>Save</span>
                    <div id='ithree'>Interest 3</div><span onClick={()=>{console.log(3)}}>Edit</span> <span onClick={()=>{this.save(3)}}>Save</span>
                </div>

                    {this.state.interestOne}


            </div>
        )
    }
}

function mapStateToProps (state) {
    const { username, firstname, city, country } = state;
    return {
        username,
        firstname,
        city,
        country
    }
}
export default connect(mapStateToProps, {})(Landing);