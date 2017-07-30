var statics = require('../libs/statics.js');

var validateForm = (context) => {
    var frontErrorList = [];


    var firstname = document.getElementById("reg_firstname").value;
    if(firstname === '')
      frontErrorList.push(402);

    var lastname = document.getElementById("reg_lastname").value;
    if(lastname === '')
      frontErrorList.push(403);

    var password = document.getElementById("reg_password").value;
    var rep_password = document.getElementById("reg_rep_password").value;
    
    if(password === '')
      frontErrorList.push(404);
    if(password !== rep_password)
      frontErrorList.push(106);
    
    
    var email = document.getElementById("reg_email").value;
    if(email === '')
      frontErrorList.push(405);

    var fathername = document.getElementById("reg_fathername").value;
    if(fathername === '')
      frontErrorList.push(411);

    var nickname = document.getElementById("reg_artname").value;
    if(nickname === '')
      frontErrorList.push(412);

    var artFields = statics.get_art_fields_list_by_title(context.get_tags_array('art-fields'));
    if(artFields.length == 0)
      frontErrorList.push(413);
    

    var religion = (document.getElementById('religion').value);
    if(religion == '')
        frontErrorList.push(415);
    else
        religion = statics.get_religion_by_title(religion);

    var habitate_length = document.getElementById("habitate_years").value;
    if(habitate_length === '')
      frontErrorList.push(418);

    var habitate_place = (document.getElementById('habitate_place').value);
    if(religion == '')
        frontErrorList.push(422);
    else
        religion = statics.get_religion_by_title(religion);

    var phone = document.getElementById('phone').value;
    if(phone === '')
      frontErrorList.push(419);

    var cellphone = document.getElementById('cellphone').value;
    if(cellphone === '')
      frontErrorList.push(420);

    var address = document.getElementById('address').value;
    if(address === '')
      frontErrorList.push(421);

    var educations = statics.get_educations_list_by_title(context.get_tags_array('educations'));
    if(educations.length == 0)
      frontErrorList.push(413);

    var birth_day = document.getElementById('birth_day').value;
    if(birth_day === '')
      frontErrorList.push(436);
    else if(birth_day < 1 || birth_day > 31)
        frontErrorList.push(436);

    var birth_month = document.getElementById('birth_month').value;
    if(birth_month === '')
      frontErrorList.push(435);
    else if(birth_month < 1 || birth_month > 12)
        frontErrorList.push(435);

    var birth_year = document.getElementById('birth_year').value;
    if(birth_year === '')
      frontErrorList.push(434);
    else if(birth_year < 1 || birth_year > 12)
        frontErrorList.push(434);

    var birth_place = document.getElementById('birth_place').value;
    if(birth_place === '')
      frontErrorList.push(437);

    console.log(frontErrorList);
    return {
        errors : frontErrorList,
        info : {
            email: email,
            password : password,
            firstname : firstname,
            lastname : lastname,
            type : 'REGU',
            info : {
                father_name : fathername,
                nickname : nickname,
                art_fields : artFields,
                religion : religion,
                habitate_status : {
                    length : habitate_length,
                    place: habitate_place,
                    phone : phone,
                    cellphone : cellphone,
                    address : address
                },
                educations : educations,
                birth : {
                    date : {
                        day : birth_day,
                        month : birth_month,
                        year : birth_year
                    },
                    place : birth_place
                },
                pictures:{
                    id_card : '',
                    profile : ''
                }
            }
        }
    };
}

module.exports = {
    validateForm
}