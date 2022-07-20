const mongoose = require("mongoose");

const url = process.env.MONGODB_PATH;
const db_connexion = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("connected with the database"));
};

module.exports = {
  db_connexion,
};
