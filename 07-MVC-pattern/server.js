const express = require("express")
const app = express();

app.get('',(req,res)=>[
    res.send('default routes')
])

app.listen(3030,()=>{
    console.log(`server is runing at http://localhost:3030`);
})