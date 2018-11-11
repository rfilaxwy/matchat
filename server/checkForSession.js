module.exports = function(req, res, next){
    const {session} = req;
    if(!session){
        session.user = {
            username:'',
            userid:'',
            bio:'',
            interestOne:'',
            interestTwo:'',
            interestThree:''
        }
        next();
    }
}