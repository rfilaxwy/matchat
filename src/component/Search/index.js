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
import Handler from '../Handler'


class Landing extends Component {
    constructor(){
        super();
        this.state = {
            matches:[],
            interest:'',
            dropdownOpen: false,
            splitButtonOpen: false
        }
        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.searchInterest = this.searchInterest.bind(this);
    }

    toggleDropDown() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }

    matchat(){
        const {userid} = this.props;
        let matches = [];
        axios.post(`/api/matches${userid}`).then( result => {
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
                <div value={i} >
                    {match.bio}
                    {match.interest_1}
                    {match.interest_2}
                    {match.interest_3}
                </div>
            )
        })       
        return(
            <div>
                <h2>Search</h2>
                <Button onClick={this.matchat}>Matchat</Button>
                {/* Get all users with matching interest(s)
                or search for an interst */}
                <InputGroup >
                    <InputGroupAddon  addonType="prepend"><Button onClick={this.searchInterest}>Search @ </Button></InputGroupAddon>
                    <Input name='interest' placeholder='Chat interest' onChange={(e)=>{this.setState({interest:Handler(e)})}}/>
                </InputGroup>
                {matchDisplay}
                
            </div>
        )
    }
}
function mapStateToProps (state) {
    const { username, firstname, city, country, userid, interest_1, interest_2, interest_3 } = state;
    return {
        username,
        firstname,
        city,
        country,
        userid,
        interest_1,
        interest_2,
        interest_3
    }
}
export default connect(mapStateToProps, {})(Landing);