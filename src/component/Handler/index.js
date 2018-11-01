export default function Handler(props){
    let input = props.target.name;
    let val = props.target.value;
    console.log(input)
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
        default:
            break;
    }
}