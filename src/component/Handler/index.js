export default function Handler(props){
    let input = props.target.name;
    let val = props.target.value;
    switch (input){
        case 'firstname':
            this.setState({firstname:val});
            break;
        case 'username':
            this.setState({username:val});
            break;
        case 'email':
            this.setState({email:val});
            break;
        case 'password':
            this.setState({password:val});
            break;
        case 'city':
            this.setState({city:val});
            break;
        case 'country':
            this.setState({country:val});
            break;
        default:
            break;
    }
}