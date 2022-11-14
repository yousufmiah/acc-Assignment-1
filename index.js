const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

const randomRoutes = require("./routes/v1/random.route.js");
const usersRoutes = require("./routes/v1/users.route.js");
const postRoutes = require("./routes/v1/post.route.js");
const patchRoutes = require("./routes/v1/patch.route.js");
const deleteRoutes = require("./routes/v1/delete.route.js");

app.use("/api/v1/user/random", randomRoutes);
app.use("/api/v1/user/all", usersRoutes);
app.use("/api/v1/user/save", postRoutes);
app.use("/api/v1/user/updateUser", patchRoutes);
app.use("/api/v1/user/deleteUser", deleteRoutes);

//==============
//==============
app.get("/", (req, res) => {
  res.send("Hello World");
});

//no route found
app.all("*", (req, res) => {
  res.send("No route found!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
