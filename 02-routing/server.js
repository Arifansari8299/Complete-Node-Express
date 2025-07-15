const express = require("express");
// for use the external routes
const userRoutes = require('./routes/userRoutes');
const app = express();
const PORT = 3031;

// external routing ko use karne ke liye middleware
app.use('/users',userRoutes)

// Routing means how your server respond to different http request like(GET,POST,PUT,DELETE,PATCH)
// 1. GET -fetch data
app.get("/", (req, res) => {
  res.send("<h1> default Routes go on about and contact </h1>");
});
app.get("/about", (req, res) => {
  res.send("This is the About page");
});

// 2. POST - send data to the server
app.post("/contact", (req, res) => {
  res.send("Form Submitted");
});

// 3. PUT - Update data
app.put("/user/:id", (req, res) => {
  res.send(`User ${req.params.id} updated`);
});

// 4. DELETE - delete data
app.delete("/user/:id", (req, res) => {
  res.send(`User ${req.params.id} deleted`);
});

// ----------------------------Route parameter------------------------------
app.get("/product/:id", (req, res) => {
  const id = req.params.id;
  res.send(`product Id is ${id}`);
//   /product/145
});

// ----------------------------query parameter------------------------------
app.get('/search',(req,res)=>{
    const {q} = req.query;
    res.send(`You Searched for : ${q}`);
    // /search?q=mango
})
// listening port
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
