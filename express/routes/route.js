const express = require('express');
const router = express.Router(); //R은 대문자! 대소문자 구분해야 함
const multer = require('multer');
const fs = require('fs');
const path =require('path');
const db = require('./../db.js');



// router.get('/', function (req, res) {
//   // Cookies that have not been signed
//   console.log('Cookies: ', req.cookies)

//   // Cookies that have been signed
//   console.log('Signed Cookies: ', req.signedCookies);
//   res.cookie('cookieKey', 'cookieValue',{maxAge:600000, httpOnly:true });
//   res.status(200).send('test');
  // maxAge //쿠키의 수명을 밀리초로 나타냄
  // expire //쿠키의 만료일자를 GMT 방식의 시간으로 나타냄
  // path //해당 디렉토리와 하위 디렉토리에서만 경로가 활성화됨
  // domain //도메인 명(사이트명)
  // rescure //웹브라우저와 웹서버가 HTTPS로 통신하는 경우에만 쿠키를 서버로 전송 HTTPS : 보안이 좀 더 신경쓴 것
  // httpOnly //웹서버를 통해서만 쿠키에 접근 가능. 자바스크립트로 쿠키에 접속을 방지
  // signed //쿠키암호화를 결정한다
// })

// router.get('/', (req, res)=>{
//   //필요한 데이터를 여기에 적어준다.
//   // res.send(html);
//     res.render('newMemo')
// });


// router.get('/sub1',(req, res) => {
//   res.sendFile(path.join(__dirname, '../','views','sub1.html'))
// })

//페이지 연결
router.get('/', (req, res)=>{
 res.render('main');
 //페이지를 불러올 때 쓰는 것 render
});

router.get('/write', (req, res)=>{
 res.render('notice_write');
});

router.get('/more',(req, res)=>{
  res.render('notice_more');
})


router.get('/brand',(req, res)=>{
  res.render('brand');
})



// router.get('/list',(req, res)=>{
//   res.render('notice_list');
// })

router.get('/noticelist', (req, res)=>{
  db.getNoti((rows)=>{
   res.render('notice_list',{rows:rows});
  })
 
 });

router.post('/writeNoti', (req,res)=>{
  let param = JSON.parse(JSON.stringify(req.body));
  let cont = param ['content'];
  let subject = param ['title'];
  let name = param ['name'];
  let id = param ['id'];
  let cate = param ['noti_cate']
  
  db.insertNoti(cont, subject, name, cate, ()=>{
    res.redirect('/noticelist');
  })
});

router.get('/contentNotice',(req,res) => {
  let id = req.query.id;
  console.log(id);
  db.getNotibyId(id,(row) =>{
    res.render('notice_more',{row:row[0]})
  })
});

router.get('/deleteNotice', (req, res)=>{
  let id = req.query.id;
  db.deleteNotibyId(id, ()=>{
    res.redirect('/noticelist')
  })
});


router.get('/editNotice', (req, res)=>{
  let id = req.query.id;
  db.getNotibyId(id, (row)=>{
    res.render('editNotice', {row:row[0]})
  })
});

router.post('/updateNoti',(req, res)=>{
  let param = JSON.parse(JSON.stringify(req.body));
  let cont = param ['content'];
  let subject = param ['title'];
  let name = param ['name'];
  let id = param ['id'];
  let cate = param ['noti_cate']
  console.log(id);

  db.updateNotice(id, cont, subject, name, cate, ()=>{
    res.redirect('/noticelist');
  })
})

// try {
//   fs.readFileSync('../public/uploads/');
// } catch(err){
//   console.log('폴더가 존재하지 않습니다.');
//   fs.mkdirSync('../public/uploads');
// }


const upload = multer({
  storage:multer.diskStorage({
    destination(req,file,done){
      done(null, 'public/uploads/');
    },
    filename(req,file,done){
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext)+ Date.now() + ext);
    }
  }),

  limits:{fileSize:1024*1024*10}
});



router.get('/productwrite', (req, res)=>{
  res.render('product_write');
 });



router.post('/productW',upload.single('product_img'),(req,res)=>{
  let param = JSON.parse(JSON.stringify(req.body));
  let img = 'uploads/' + req.file.filename;
  let name = param ['product_name'];
  let price = param ['product_price'];
  let text = param ['product_txt'];
  let viewTxt = param ['product_exp'];
  db.insertProduct(img,name,price,text,viewTxt, ()=>{
    res.redirect('/productlist')

  })
});

router.get('/productlist', (req, res)=>{
  db.getProduct((rows)=>{
    res.render('product_list',{rows:rows});
  })

 });

router.get('/productBtn',(req,res)=>{
  let id = req.query.id;
  console.log(id);

  db.getProductbyId(id,(row) => {
    res.render('product_update',{row:row[0]})
  })
});

router.post('/updateProduct', upload.single('product_img'),(req,res)=>{
  let param = JSON.parse(JSON.stringify(req.body));
  let img = 'uploads/' + req.file.filename;
  let name = param ['product_name'];
  let price = param ['product_price'];
  let text = param ['product_txt'];
  let viewTxt = param ['product_exp'];
  let id = param['id'];

  db.updateProduct(id,img,name,price,text,viewTxt, ()=>{
    res.redirect('/productlist');
  })
});

router.get('/deleteP',(req,res) =>{
  let id = req.query.id;
  db.deletePbyId(id,()=>{
    res.redirect('/productlist')
  })
});



router.get('/productviewer', (req, res)=>{
   let id = req.query.id;
   db.getProductbyId(id, (row) =>{
    res.render('product_viewer',{row:row[0]})
   })

 });








router.get('/join',(req, res)=>{
  res.render('join');
})


router.post('/writeJoin',(req, res) =>{
  let param = JSON.parse(JSON.stringify(req.body));

  let nun = param ['num'];
  let name = param['name'];
  let adress = param['adress'];
  let birth = param['birth']
  let email = param['email']
  let id = param['id'];
  let pw = param['pw'];
  let repw = param['repw'];

  db.memberJoin(name, adress, birth, email, id, pw, ()=>{
    res.redirect('/');
    })
});



router.get('/login',(req, res)=>{
  res.render('login');
})

router.post('/loginre', (req, res)=>{
  let param = JSON.parse(JSON.stringify(req.body));
  let id = param['user_id'];
  let pw = param['user_pw'];

  db.loginCheck(id,pw, (results)=>{
    if(results.length>0) {
      res.redirect('/')
    }else{
      res.send(`<script>alert("로그인 정보가 일치하지 않습니다."); document.location.href="/login";</script>`)
    }
  });
})







module.exports = router;

