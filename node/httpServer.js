import http from 'http'
import fs from 'fs'
const port = 8090;

const server = http.createServer((req, res)=>{
    if(req.url ==='/' ){
        res.write('this is welcome page')
        res.end()
    }

    else if(req.url ==='/contact'){
        let ans = fs.readFileSync('Pages/index.html', 'utf-8')
        res.write(ans)
        res.end()
    }
})




server.listen(port , ()=>{
    console.log("server is running")
})


// https://github.com/shubhamkumar123456/tg-310-G-4.git
