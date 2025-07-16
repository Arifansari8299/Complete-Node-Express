const express = require("express");
const app = express();

app.set("view engine", "ejs"); // set EJS as template engine
app.set("views", "views");     // set custom views folder (optional)

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', { name: "Arif" }); // renders views/home.ejs
});

app.get('/about', (req, res) => {
    res.render('about'); // renders views/about.ejs
});
app.get('/profile',(req,res)=>{
    const user = {
        name:"Habibullah",
        age:18,
        hobbies:['Hocky', 'Trading', 'driving']
}
 res.render('profile',{user})
})

app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});
