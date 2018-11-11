export default function Handler(props){
    let input = props.target.name;
    let val = props.target.value;
    switch (input){
        case 'firstname':
            return val;
        case 'username':
            return val;
        case 'email':
            return val;
        case 'password':
            return val;
        case 'city':
            return val;
        case 'country':
            return val;
        case 'interest':
            return val;
        default:
            break;
    }
}