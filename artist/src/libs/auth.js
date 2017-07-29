var userCheck = (userName, password, callBack) => {
    /* check username and password progress */
    var data = JSON.stringify({
    "password": password,
    "email": userName
    });

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
            var res = JSON.parse(this.responseText);
            callBack(res);
        }
    });

    xhr.open("POST", "http://94.23.171.142:5000/login");
    xhr.setRequestHeader("content-type", "application/json");

    xhr.send(data);
}

var userRegister = (data, on_error_callback, on_success_callback) => {
    var json_data = JSON.stringify(data);

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var res = JSON.parse(this.responseText);
            if(res.results === 'failed'){
                on_error_callback(res.errors);
            }else{
                on_success_callback(res.info);
            }
        }
    });
    /* to remove server */
    xhr.open("POST", "http://94.23.171.142:5000/register");

    xhr.setRequestHeader("content-type", "application/json");
    xhr.send(json_data);
}
var userGetInformation = (userName) => {
    return false;
}
module.exports = {
    userCheck,
    userGetInformation,
    userRegister
}