'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
    _id: Objectid,
    first_name: String,
    last_name: String,
    password: String,
    email: String,
    type: {
        type : String,
        enum: [['AD', 'RG'], 'نوع کاربری صحیح نمی باشد']
    },
    info: {
        father_name: String,
        nickname: String,
        art_fields: [{
            code: Number,
            title: String
        }],
        religion: {
            code: Number,
            title: String
        },
        haebitate_status: {
            length: Number,
            place: {
                code: Number,
                title: String
            },
            phone: String,
            cellphone: String,
            address: String
        },
        educations: [{
            degree: {
                code: Number,
                title: String
            },
            field: {
                code: Number,
                titile: String
            }
        }],
        birth: {
            date: {
                type : Date,
                max : [ Date.now(), 'تاریخ تولد اشتباه است'],
                min: [Date('1950-01-01'), 'تاریخ تولد اشتباه است']
            },
            place: String
        },
        pictures: {
            id_card: Objectid,
            profile: Objectid
        }
    },
    token: {
        created: Date,
        expire: Date,
        value: String
    },
    status: {
        code: Number,
        title: String
    }
});

module.exports = mongoose.model('Tasks', TaskSchema);