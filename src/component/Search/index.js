import React, {Component} from 'react';
import {allMatching, searchMatch} from './findAllMatches';
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
            interst:'',
            dropdownOpen: false,
            splitButtonOpen: false
        }
        this.toggleDropDown = this.toggleDropDown.bind(this);
    }

    toggleDropDown() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }

    matchat(){
        const {userid} = this.props
        const matches = allMatching(userid);
        this.setState({matches:matches})
      }

    seartchInterst(){

      }

    render(){
        const {matches} = this.state;
        const matchDisplay = matches.map((key, index) => {
            return <div value={key}>
                {key.username}
                {key.bio}
            </div>
        })
        return(
            <div>
                <h2>Search</h2>
                <Button onClick={this.matchat}>Matchat</Button>
                {/* Get all users with matching interest(s)
                or search for an interst */}
                <InputGroup >
                    <InputGroupAddon  addonType="prepend"><Button>Search @ </Button></InputGroupAddon>
                    <Input name='interest' placeholder='Chat interest' onChange={(e)=>{this.setState({interst:Handler(e)})}}/>
                </InputGroup>

                
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