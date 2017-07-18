/*
    this file contains all function and operations about users auth
*/


function register (req, res){
    res.send('register');
}

function login(req, res){
    res.send('login');
}
/* exports */
module.exports = {
    register,
    login
}