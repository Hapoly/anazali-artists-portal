var userCheck = (userName, password, on_success, on_failed, on_pending) => {
    /* check username and password progress */
    var data = JSON.stringify({
    "password": password,
    "email": userName
    });

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var res = JSON.parse(this.responseText);
            if(res.result == 'success')
                on_success(res.user);
            else if(res.result == 'failed')
                on_failed();
            else if(res.result == 'pedning')
                on_pending();
        }
    });

    xhr.open("POST", "http://94.23.171.142:5000/login");
    xhr.setRequestHeader("content-type", "application/json");

    xhr.send(data);
}

var userRegister = (input, on_error_callback, on_success_callback) => {
    var data = new FormData();
    data.append("profile", input.info.pictures.profile);
    data.append("info", JSON.stringify(input));
    data.append("scan", input.info.pictures.id_card);

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    console.log('loading to send');
    xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
        console.log(this.responseText);
        var res = JSON.parse(this.responseText);
        if(res.result === 'failed'){
            on_error_callback(res.errors);
        }else{
            on_success_callback(res.info);
        }
    }
    });

    xhr.open("POST", "http://94.23.171.142:5000/register");

    xhr.send(data);
    /*
    var data = new FormData();
    data.append("profile", data.profile);
    data.append("info", JSON.stringify(data.info));
    data.append("scan", data.scan);

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
    */
}
var userGetInformation = (userName) => {
    return false;
}
module.exports = {
    userCheck,
    userGetInformation,
    userRegister
}