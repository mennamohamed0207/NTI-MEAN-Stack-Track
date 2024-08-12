const mongoose = require("mongoose");
const dbConnection = () => {
  mongoose
    .connect(process.env.DBCONNECTIONSTRING)
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((error) => {
      console.log("Error occured", error);
    });
};
module.exports=dbConnection;