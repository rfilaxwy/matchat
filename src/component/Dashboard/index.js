import React, {Component} from 'react';
import {addInterest} from '../../ducks/reducer';
import {connect} from 'react-redux';
import axios from 'axios';
import {Button, Modal, ModalBody, ModalFooter} from 'reactstrap';
import './index.scss';

class Landing extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            bio:'',
            interst_1:'',
            interst_2:'',
            interst_3:'',
            profilePicture:'',
            userid:'',
            toggle:false
            }
        this.update = this.update.bind(this);
        this.toggle = this.toggle.bind(this);
        this.delete = this.delete.bind(this);
        
    }
    componentDidMount(){
        const {userid}=this.props;
        axios.post('/api/profile',{userid}).then(res => {
            console.log(res.data)
            const {bio, interest_1, interest_2, interest_3} = res.data;
            this.props.addInterest(userid,interest_1, interest_2, interest_3)
            this.setState({
                bio:bio, 
                interestOne:interest_1, 
                interestTwo:interest_2, 
                interestThree:interest_3,
                userid:userid,
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
            case 4:
                document.getElementById('bio').contentEditable = true;
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
                document.getElementById('itwo').contentEditable = false;
                const interestTwo = document.getElementById('itwo').innerHTML;
                this.setState({interestTwo:interestTwo});
                break;
            case 3:
                document.getElementById('ithree').contentEditable = false;
                const interestThree = document.getElementById('ithree').innerHTML;
                this.setState({interestThree:interestThree});
                break;
            case 4:
                document.getElementById('bio').contentEditable = false;
                const bio = document.getElementById('bio').innerHTML;
                this.setState({bio:bio});
                break;
            default:
                break;
        }   
    }

    update(){
        const {userid, bio, interestOne, interestTwo, interestThree}= this.state;
        axios.put('/api/update', {userid, bio, interestOne, interestTwo, interestThree}).then(res => {
            
        })
    }
    delete(){
        const {userid} = this.state;
        axios.delete(`/api/user/${userid}`).then(results => {
            this.props.history.push('/');
        })
    }

    toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }
    render(){
        const {username, city, country}= this.props;
        return(
            <div className='card'>
                <h2>Welcome {username} <span className='shrink'>from {city}, {country}</span></h2>

                <div className="interestCard">
                    <div>Interest 1:<div className='inputs' id='ione'>{this.state.interestOne}</div><span onClick={()=>{this.editInterest(1)}}>Edit</span> <span onClick={()=>{this.save(1)}}>Save</span></div> 
                    <div>Interest 2:<div className='inputs' id='itwo'>{this.state.interestTwo}</div><span onClick={()=>{this.editInterest(2)}}>Edit</span> <span onClick={()=>{this.save(2)}}>Save</span></div>
                    <div>Interest 3:<div className='inputs' id='ithree'>{this.state.interestThree}</div><span onClick={()=>{this.editInterest(3)}}>Edit</span> <span onClick={()=>{this.save(3)}}>Save</span></div>
                </div>
                <div className='bioCard'>
                    <section>
                        <div>BIO:<div className='inputs inputsBio'id='bio'>{this.state.bio}</div><span onClick={()=>{this.editInterest(4)}}>Edit</span><span onClick={()=>{this.save(4)}}>Save</span></div>
                    </section>
                </div>
                <div>
                <Button className='butt' onClick={this.update}>Update</Button>
                <Button className='butt' color="danger" onClick={this.toggle}>Delete Profile</Button>
                </div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalBody>
                       Are you sure you want to delete, forever, your profile?
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.delete}>Blow it away</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

function mapStateToProps (state) {
    const { username, firstname, city, country, userid,interest_1,interest_2,interest_3 } = state;
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
export default connect(mapStateToProps, {addInterest})(Landing);