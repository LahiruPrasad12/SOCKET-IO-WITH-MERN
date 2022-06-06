const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  const url = `mongodb+srv://Admin:hash99lahi20@hotelsobana.z6log.mongodb.net/project_managment?retryWrites=true&w=majority`
  try {
    const conn = await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;
