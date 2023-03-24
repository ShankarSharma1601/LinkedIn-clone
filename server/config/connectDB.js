const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongoose is running , ${mongoose.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;

// useUnifiedTopology: true,
//       useNewUrlParser: true,
//       useCreateIndex: true,
