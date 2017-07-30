var get_art_fields_list_by_title = (titles_array) => {
    var data = {
        'خوانندگی':         1,
        'نوازندگی':         2,
        'تئاتر':            3,
        'سینما':            4,
        'فیلم نامه نویسی':  5,
        'گیتار':            6,
        'منبت کاری':        7,
        'مجسمه سازی':       8,
        'نقاشی آبرنگ':      9,
        'نقاشی مداد شمعی':  10,
        'نقاشی':            11,
        'میکس':             12,
        'پیانو':            13,
        'بازیگری':          14,
        'صدابرداری':        15,
        'دی جی':            16,
        'عکاسی':            17,
        'فیلم برداری':      18,
        'موسیقی سنتی':      19,
        'تمبک':             20,
        'پانتومیم':         21,
    }
    var result = []
    for(var i=0; i<titles_array.length; i++){
        result.push({
            code : data[titles_array[i]],
            title : titles_array[i],
        })
    }
    return result;
}
var get_educations_list_by_title = (titles_array) => {
    var data = {
        "دیپلم - ریاضی فیزیک":  1,
        "دیپلم - هنر":          2,
        "فوق دیپلم - نوازندگی": 3,
        "لیسانس - موسیقی":      4,
        "لیسانس - سینما":       5,
        "لیسانس - تئاتر":       6,
        "لیسانس - عکاسی":       7,
    }
    var result = []
    for(var i=0; i<titles_array.length; i++){
        result.push({
            code : data[titles_array[i]],
            title : titles_array[i],
        });
    }
    return result;
}

var get_habitate_place_by_title = (title) => {
    var data = {
        "رشت":          1,
        "آستانه":       2,
        "انزلی":        3,
        "صومعه سرا":    4,
        "رودسر":        5,
        "لاهیجان":      6,
        "جیرده":        7,
    };
    return {
        id : data[title],
        title : title
    }
}

var get_religion_by_title = (title) => {
    var data = {
        "اسلام شیعه":   1,
        "اسلام سنی":    2,
        "مسیحیت":       3,
        "کلیمی":        4,
        "زرتشتی":       5,
        "رضا":          6,
    };
    return {
        id : data[title],
        title : title
    }
}
module.exports = {
    get_art_fields_list_by_title,
    get_educations_list_by_title,
    get_habitate_place_by_title,
    get_religion_by_title
}