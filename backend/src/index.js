require("dotenv").config();
const express = require("express");
const cors = require("cors");
const upload = require("express-fileupload");
const app = express();
const mongoose = require("mongoose");
const { db_connexion } = require("./database");

const PORT = process.env.PORT || 3002;
const userRoute = require("./routes/user.route");
const postRoute = require("./routes/post.route");
const commentRoute = require("./routes/comment.route");
const authRoute = require("./routes/auth.route");
const { validFormat } = require("./middleware/validator");
const securedRoute = require("./middleware/security");

app.listen(PORT, () => {
  console.log(`server is runing  on port : ${PORT}`);
});
db_connexion();

app.use(express.json());
app.use(upload());
app.use(express.json());
app.use(express.urlencoded());
app.use(
  cors({
    origin: (origin, callback) => callback(null, true),
    credentials: true,
  })
);

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/comments", commentRoute);
