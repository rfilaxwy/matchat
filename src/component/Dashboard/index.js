import React, {Component} from 'react';

import {connect} from 'react-redux';
import axios from 'axios';

class Landing extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            bio:'',
            interstOne:'',
            interstTwo:'',
            interstThree:'',
            profilePicture:''
        }
        
    }
    componentDidMount(){
        const {userid}=this.props;
        debugger
        axios.post('/api/profile',{userid}).then(res => {
            console.log(res.data)
            const {bio, interest_1, interest_2, interest_3} = res.data[0];
            this.setState({
                bio:bio, 
                interestOne:interest_1, 
                interestTwo:interest_2, 
                interestThree:interest_3
            })
        })
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
                const interestTwo = document.getElementById('itwo').innerHTML;
                this.setState({interestTwo:interestTwo});
                break;
            case 3:
                document.getElementById('ithree').contentEditable = true;
                const interestThree = document.getElementById('ithree').innerHTML;
                this.setState({interestThree:interestThree});
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
                    <div id='ione'>Interest 1:{this.state.interestOne}</div><span onClick={()=>{this.editInterest(1)}}>Edit</span> <span onClick={()=>{this.save(1)}}>Save</span>
                    <div id='itwo'>Interest 2:{this.state.interestTwo}</div><span onClick={()=>{this.editInterest(2)}}>Edit</span> <span onClick={()=>{this.save(2)}}>Save</span>
                    <div id='ithree'>Interest 3: {this.state.interestThree}</div><span onClick={()=>{this.editInterest(3)}}>Edit</span> <span onClick={()=>{this.save(3)}}>Save</span>
                </div>
                <div className='bioCard'>
                    <section>
                        {this.state.bio}
                    </section>
                </div>
                <button onClick={this.props.update}>Update</button>

            </div>
        )
    }
}

function mapStateToProps (state) {
    const { username, firstname, city, country, userid } = state;
    return {
        username,
        firstname,
        city,
        country,
        userid
    }
}
export default connect(mapStateToProps, {})(Landing);