//mpn으로 받은 애들 필요한 거 적어서 연결해주기

const expressLayout = require('express-ejs-layouts');
const express = require('express');
const cookieParser = require('cookie-parser')
const routers = require('./routes/route')
const app = express();
const path = require('path')
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.set('views',path.join(__dirname, 'views')); 
app.set('view engine', 'ejs')
//views폴더 경로 잡아주기


app.use(expressLayout);
app.use('/', routers)
app.use(express.static(path.join(__dirname, 'public')));
//public폴더 연결


module.exports = app;
//app이라는 이름으로 모듈화시켜서 내보내겠다.


