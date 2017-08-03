var messages = {
    /* auth errors */
    e402 : "لطفا نام خود را وارد کنید",
    e403 : "لطفا نام خانوادگی خود را وارد کنید",
    e404 : "لطفا کلمه عبور خود را وارد کنید",
    e405 : "لطفا ایمیل خود را وارد کنید",
    e105 : "آدرس ایمیل وارد شده تکراری است",
    e106 : "رمز عبور ها یکسان نمی باشند",
    e411 : "لطفا نام پدر خود را وارد کنید",
    e412 : "لطفا نام هنری خود را وارد کنید",
    e413 : "لطفا حداقل یک حوزه هنری را مشخص کنید",
    e415 : "لطفا مذهب خود را مشخص کنید",
    e418 : "مدت اقامت خود در محل سکونت را مشخص کنید",
    e419 : "شماره تلفن ثابت را وارد کنید",
    e420 : "لطفا شماره تلفن همراه را بنویسید",
    e421 : "لطفا آدرس محل اقامت خود را بنویسی",
    e422 : "لطفا شهر محل اقامت خود را وارد کنید",
    e436 : "لطفا روز تولد خود را مشخص کنید",
    e435 : "لطفا ماه تولد خود را مشخص کنید",
    e434 : "لطفا سال تولد خود را مشخص کنید",
    e437 : "لطفا محل تولد خود را وارد کنید",
    e438 : "لطفا اسکن کارت ملی خود را وارد کنید",
    e439 : "لطفا تصویر پروفایل خود را وارد کنید",

    e109 : "مجوز ورود یافت نشد",
    e110 : "کاربر مورد نظر یافت نشد",
    e111 : "شما دسترسی کافی ندارید" ,
    e112 : "آدرس ایمیل یا کلمه ی عبور اشتباه است",
    e113 : "حساب کاربری شما هنوز توسط کارشناس سامانه تایید نشده است",
    e114 : "",
    e115 : "",

    /* user management errros */
    e201 : "شناسه کاربری را وارد نکرده اید",
    e202 : "لطفا پارامتر های لازم برای api را رعایت کنید",
}
var getErrorMEssage = (messageCode) => {
    console.log(messageCode);
    return messages['e' + messageCode];
}
module.exports = {
    getErrorMEssage
}