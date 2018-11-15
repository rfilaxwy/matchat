const initialState = {
    firstname:'',
    username:'',
    userid:'',
    city:'',
    country:'',
    interest_1:'',
    interest_2:'',
    interest_3:'',
    bio:'',
}
const GET_USER = 'GET_USER';
const LOGIN_USER = 'LOGIN_USER';
const UPDATE_BIO = 'UPDATE_BIO';
const ADD_INTEREST = 'ADD_INTEREST';


function reducer (state = initialState, action) {
    let {payload} = action;
    switch(action.type){
        case UPDATE_BIO:
            return Object.assign({}, state, {bio:payload.bio})
        case ADD_INTEREST:
            return Object.assign({},state, {
                interest_1:payload.interest_1, 
                interest_2:payload.interest_2, 
                interest_3:payload.interest_3
            });
        case GET_USER:
            return Object.assign({}, state, {
                firstname:payload.firstname,
                username:payload.username,
                email:payload.email,
                city:payload.city,
                country:payload.country,
                userid:payload.userid
            })
        case LOGIN_USER:
            return Object.assign({}, state, {
                username:payload.username,
                password:payload.password

            });
        default:
            return state;
    }
};

export function updateBio (userid,bio) {
    return {
        type: UPDATE_BIO,
        payload: {userid, bio}
    }
};

export function addInterest (userid, interest_1, interest_2, interest_3) {
    return {
        type: ADD_INTEREST,
        payload: {
            userid,
            interest_1,
            interest_2,
            interest_3
        }
    }
};

export function getUser (firstname, username, city, country,userid) {
    return {
        type: GET_USER,
        payload: {
            firstname,
            username,
            city,
            country,
            userid
        }
    }
};

export default reducer;