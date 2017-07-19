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

var userRegister = (data, callBack) => {
    var data = JSON.stringify(data);

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            if(this.body.result = 'sucess')
                callBack(true, this.body.info);
            else
                callBack(false, this.body.errors);
            console.log(this.responseText);
        }
    });

    xhr.open("POST", "http://localhost:5000/register");
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