/*
    this file contains all function and operations about users auth
*/


function register (req, res, db){
    console.log(req.body);
    res.send('register');
}

function login(req, res, db){
    res.send('login');
}
/* exports */
module.exports = {
    register,
    login
}