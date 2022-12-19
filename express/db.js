var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'us-cdbr-east-06.cleardb.net',
  user     : 'be2dcc9b032eda',
  password : 'f4673df3',
  database : 'heroku_041c18528f2c27d',
  multipleStatements : true //다중쿼리용 설정
});
 
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!")
});

function getNoti(callback){
    connection.query('SELECT * FROM noticere ORDER BY id desc',(err, rows)=>{
        if (err) throw err;
        callback(rows);
    })
};


function insertNoti(cont, subject, name, cate, callback) {
    connection.query(`INSERT INTO noticere (create_time, name, cate, title, content) VALUES (NOW(), '${name}','${cate}', '${subject}','${cont}')`, (err)=>{
        if (err) throw err;
        callback();
    })
};

function getNotibyId(id, callback){
    connection.query(`SELECT * FROM noticere WHERE id =${id}`,(err,row) => {
        if(err) throw err;
        callback(row);
    })
}


function deleteNotibyId (id, callback){
    connection.query(`DELETE FROM noticere WHERE id=${id}`,(err)=>{
        if(err) throw err;
        callback();
    })
}

function updateNotice(id, cont, subject, name, cate, callback){
    connection.query(`UPDATE noticere SET content='${cont}', title='${subject}', name='${name}', cate='${cate}' WHERE id=${id}`,(err) =>{
        if(err) throw err;
        callback();
    })
}
// cate='${cate}'

function memberJoin (name, adress, birth, email, id, pw, callback){
    connection.query(`INSERT INTO joinre(create_time, email, name, adress, birth, id, pw) values (NOW(),'${email}','${name}','${adress}','${birth}','${id}','${pw}')`, (err) =>{
        if (err) throw err;
        callback();
    })
}

function loginCheck(id, pw, callback){
    connection.query(`SELECT * FROM joinre WHERE id='${id}' and pw='${pw}'`, (err, results)=>{
        if(err) throw err;
        callback(results);
    })
}

function insertProduct(img,name,price,text,viewTxt, callback){
    connection.query(`INSERT INTO productdb(create_time,img,name,price,product_txt,product_exp) VALUES (NOW(), '${img}','${name}','${price}','${text}',${viewTxt}')`,
    (err) => {
        if(err) throw err;
        callback();
    })
}

function getProduct(callback){
    connection.query('SELECT * FROM productDB ORDER BY id desc', (err,rows,fields)=>{
        if(err) throw err;
        callback(rows);
    })
}


function getProductbyId (id, callback){
    connection.query(`SELECT * FROM productDB WHERE id = ${id}`, (err,row)=>{
        if(err) throw err;
        callback(row);
    })
}

function updateProduct(id,img,name,price,text,viewTxt, callback){
    connection.query(`UPDATE productDB SET create_time=NOW(),img='${img}', name='${name}',price='${price}', product_txt='${text}', product_exp='${viewTxt}' WHERE id=${id}`, (err)=>{
        if(err) throw err;
        callback();
    })
}

function deletePbyId (id, callback){
    connection.query(`DELETE FROM productDB WHERE id=${id}`,(err) => {
        if(err) throw err;
        callback();
    })
}

module.exports = {
    getNoti, insertNoti,getNotibyId,deleteNotibyId,updateNotice,
    memberJoin,loginCheck,
    insertProduct,getProduct,
    getProductbyId,updateProduct,
    deletePbyId
}