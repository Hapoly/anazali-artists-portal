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

var userRegister = (data, on_error_callback, on_success_callback) => {
    var data = JSON.stringify(data);

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
        if(data.result == 'failed'){
            on_error_callback(data.errors);
        }else{
            on_success_callback(data.info);
        }
    }
    });

    xhr.open("POST", "http://94.23.171.142:5000/register");
    xhr.setRequestHeader("content-type", "application/json");

    xhr.send(data);
}
var userGetInformation = (userName) => {
    return false;
}
module.exports = {
    userCheck,
    userGetInformation
}