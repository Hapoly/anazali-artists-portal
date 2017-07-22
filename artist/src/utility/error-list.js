var messages = {
    e101 : "لطفا نام خود را وارد کنید",
    e102 : "لطفا نام خانوادگی خود را وارد کنید",
    e103 : "لطفا کلمه عبور خود را وارد کنید",
    e104 : "لطفا ایمیل خود را وارد کنید",
    e105 : "آدرس ایمیل وارد شده تکراری است",
    e106 : "رمز عبور ها یکسان نمی باشند",
    e107 : "لطفا نام پدر خود را وارد کنید",
    e108 : "لطفا نام هنری خود را وارد کنید",
    e109 : "مجوز ورود یافت نشد",
    e110 : "کاربر مورد نظر یافت نشد",
    e111 : "شما دسترسی کافی ندارید"
}
var getErrorMEssage = (messageCode) => {
    console.log(messageCode);
    return messages['e' + messageCode];
}
module.exports = {
    getErrorMEssage
}