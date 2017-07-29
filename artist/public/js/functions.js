$(document).ready(function(){
    $('ul.tabs').tabs();

    $('.art-fields-autocomplete').material_chip({
        placeholder: '+ حرفه های بیشتر',
        secondaryPlaceholder: 'حرفه های هنری',
        autocompleteOptions: {
        data: {
            'خوانندگی': null,
            'نوازندگی': null,
            'تئاتر': null,
            'سینما': null,
            'فیلم نامه نویسی': null,
            'گیتار': null,
            'منبت کاری': null,
            'مجسمه سازی': null,
            'نقاشی آبرنگ': null,
            'نقاشی مداد شمعی': null,
            'نقاشی': null,
            'میکس': null,
            'پیانو': null,
            'بازیگری': null,
            'صدابرداری': null,
            'دی جی': null,
            'عکاسی': null,
            'فیلم برداری': null,
            'موسیقی سنتی': null,
            'تمبک': null,
            'پانتومیم': null,
        },
        limit: 5,
        minLength: 1
        }
    });

    $('.religion-autocomplete').autocomplete({
        data: {
            "اسلام شیعه": null,
            "اسلام سنی": null,
            "مسیحیت": null,
            "کلیمی": null,
            "زرتشتی": null,
            "رضا": null,
        },
        limit: 2,
        onAutocomplete: function(val) {
        },
        minLength: 1,
    });

    $('.habitate-autocomplete').autocomplete({
        data: {
            "رشت": null,
            "آستانه": null,
            "انزلی": null,
            "صومعه سرا": null,
            "رودسر": null,
            "لاهیجان": null,
            "جیرده": null,
        },
        limit: 2,
        onAutocomplete: function(val) {
        },
        minLength: 1,
    });

    $('.educations-autocomplete').material_chip({
        placeholder: '+ مدرک تحصیلی',
        secondaryPlaceholder: 'تحصیلات',
        autocompleteOptions: {
        data: {
            "دیپلم - ریاضی فیزیک": null,
            "دیپلم - هنر": null,
            "فوق دیپلم - نوازندگی": null,
            "لیسانس - موسیقی": null,
            "لیسانس - سینما": null,
            "لیسانس - تئاتر": null,
            "لیسانس - عکاسی": null,
        },
        limit: 5,
        minLength: 1
        }
    });
});