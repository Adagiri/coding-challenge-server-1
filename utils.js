const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('DB connected successfully');
  } catch (error) {
    console.log('Error occured whilst connecting to DB: ', error);
  }
};

module.exports = {
  connectDB,
};
