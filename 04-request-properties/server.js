const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("<h2>request properties</h2>");
});

// 1. req.params (Route parameter)
// (used to capture value from urls)
app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`User Id : ${userId}`);
});

// 2. req.query --Query parameter
app.get("/search", (req, res) => {
  const searchTerm = req.query.q;
  res.send(`Search Term is ${searchTerm}`);
  //   search?q=javascript
});

// 3. req.body -- form or json data
// to read post/put body data, we use express.json() and/or express.urlencoded() middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for form data

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  res.send(`Logged in as ${username}`);
});

// 4. req.header (Request header)
app.get("/check-header", (req, res) => {
  const userAgent = req.header["user-agent"];
  res.send(`your browser is : ${userAgent}`);
});

// 5. req.method HTTP method used
app.all("/method", (req, res) => {
  res.send(`HTTP Method is :${req.method}`);
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
