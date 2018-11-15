import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import { 
    Button,
    Input,
    InputGroup,
    InputGroupAddon
        } from 'reactstrap';

//Custom
import Handler from '../Handler';
import './index.scss';


class Landing extends Component {
    constructor(){
        super();
        this.state = {
            userid:'',
            matches:[],
            interest:'',
            dropdownOpen: false,
            splitButtonOpen: false
        }
        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.searchInterest = this.searchInterest.bind(this);
        this.matchat = this.matchat.bind(this);
    }
    componentDidMount(){
        const {userid} = this.props;
        this.setState({userid:userid});
    }

    toggleDropDown() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }

    matchat(){
        const {interest_1,interest_2,interest_3} = this.props;
        let matches = [];
        debugger
        axios.post(`/api/matches`,{interest_1,interest_2, interest_3}).then( result => {
            debugger    
            matches = result.data;
                this.setState({matches:matches})
            });        
      }

    searchInterest(){
        const {interest} = this.state;
        let matches= [];
        axios.post('/api/match', {interest}).then(result => {
            matches = result.data;
            this.setState({matches:matches});
            })
      }

    render(){
        const {matches} = this.state;
        const matchDisplay = matches.map((match, i) => {
            return(
                <div className='interestCard' value={i} >
                    <p>BIO {match.bio}</p>
                    <p>Interest 1: {match.interest_1}</p>
                    <p>Interest 2: {match.interest_2}</p>
                    <p>Interest 3:{match.interest_3}</p>
                </div>
            )
        })       
        return(
            <div className='card'>
                <h2>Search</h2>
                <Button className='butt' onClick={this.matchat}>Matchat</Button>
                {/* Get all users with matching interest(s)
                or search for an interst */}
                <InputGroup className='butt' >
                    <InputGroupAddon  addonType="prepend"><Button  onClick={this.searchInterest}>Search @ </Button></InputGroupAddon>
                    <Input name='interest' placeholder='Chat interest' onChange={(e)=>{this.setState({interest:Handler(e)})}}/>
                </InputGroup>
                <div className='container'>
                    {matchDisplay}
                </div>
                
                
            </div>
        )
    }
}
function mapStateToProps (state) {
    const { userid, interest_1, interest_2, interest_3 } = state;
    return {
        userid,
        interest_1,
        interest_2,
        interest_3
    }
}
export default connect(mapStateToProps, {})(Landing);