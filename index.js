const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const { User } = require("./models/User");
const config = require('./config/key');
//서버에서  분석해서 가져올 수 있게
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected... '))
    .catch(err => console.log(err))

app.get('/', (req, res) => res.send('안녕안녕 '))

app.post('/register', (req, res) => {
    //회원가입할때 필요한 정보들을 클라이언트에서 가져오면 이것들을 데이터베이스에 넣어줌 

    const user = new User(req.body)
    user.save((err, userInfo) => {
        if (err) return res.json({ success: false, err })
        return res.status(200).json({
            success: true
        })

    })

})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))