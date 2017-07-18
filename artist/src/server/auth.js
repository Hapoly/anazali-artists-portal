var userCheck = (userName, password, callBack) => {
    /* check username and password progress */
    var users = {
        "sadaf" : "sadaf123",
        "reza" : "reza96",
        "sorush" : "baxetkojas"
    }
    if(userName in users && users[userName] == password)
        callBack(true);
    else
        callBack(false);
}

var userGetInformation = (userName) => {
    return false;
}
module.exports = {
    userCheck,
    userGetInformation
}