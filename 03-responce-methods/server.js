import express from 'express'
const app = express();
import path from 'path';

// ye bas ES module ke liye hai na ki common js ke liye (start)
import { fileURLToPath } from 'url';
// Define __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// --------------end----------------

app.get('/',(req,res)=>{
    // 1. send the responce of various types(string,object)
    res.send("Welcome to the Home page");
    // res.send({success:false})
})

// 2. res.json() send a json responce for api
   app.get('/api/user',(req,res)=>{
    res.json({"name":"Arif", age:23})
   })

//  3. res.status() // sets the http status for the responce. Can be chained with .send() or.json()
    app.get('/notfound',(req,res)=>{
        res.status(200).send({message:"page not found"});
        // res.status(200).json({success:true})
    })

//  4. res.redirect() Redirect the client to the Another URL
    app.get('/google',(req,res)=>{
        res.redirect('https://www.google.com');
    })

// 5. res.download() force the browser to download the files
    
    app.get('/download', (req, res) => {
        res.download(path.join(__dirname, 'files', 'Resume.pdf')); // for "type":"module"
        // res.download(__dirname + './files/Resume.pdf'); // for common js 
    });

// 6. res.render() used with ejs
   

app.listen(3000,()=>{
    console.log(`server is running at http://localhost:3000`)
})