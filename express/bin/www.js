let app = require('../app') //이 파일도 같이 요청해서 실행해줘

let port = 3000;


//../app파일 요청했으니까 listen 해줘야 함
// app.listen(port, ()=>{
//   console.log(`${port}로 express 실행`)
// })

app.listen(port)
//포트 3000

