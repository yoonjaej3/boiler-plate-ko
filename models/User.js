const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, //스페이스 공백을 없애줌
        unique: 1

    },
    password: {
        type: String,
        trim: true,
        unique: 1//중복갯수

    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})

const User = mongoose.model('User', userSchema) //모델의 이름,스키마

module.exprots = {} //다른 파일에서도 써줄 수 있게