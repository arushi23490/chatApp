const mongoose = require("mongoose");
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("connected to db");
    });
    connection.on("error", (err) => {
      console.log("error ", err);
    });
  } catch (err) {
    console.log("Something wrong ", err);
  }
}

module.exports = connectDB;
