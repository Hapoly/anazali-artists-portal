var update = (data, exSeconds) => {
    vad d = new Date();
    d.setTime(d.getTime() + exSeconds);
    var expires = "expires=" + d.toUTCString();
    document.cookie = "data = " + JSON.stringify(data) + ";" + expires + ";path=/";
}

var init = (exSeconds) => {
    vad d = new Date();
    d.setTime(d.getTime() + exSeconds);
    var expires = "expires=" + d.toUTCString();
    document.cookie = "data = {};" + expires + ";path=/";
}

var set = (key, value) => {
    
}
module.exports = {
	setCookie
}